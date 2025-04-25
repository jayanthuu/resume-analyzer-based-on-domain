import io
import fitz  # PyMuPDF
import google.generativeai as genai
import os
from flask import Flask, render_template_string, request
from werkzeug.utils import secure_filename

# Setup Gemini API
genai.configure(api_key="AIzaSyCnBmlua3cl4Xd56FhskO3s6hwlgGhoGso")  # Replace with your real Gemini API key
model = genai.GenerativeModel('models/gemini-1.5-pro-latest')

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

DOMAINS = [
    "AI/ML Developer", "Software Engineer", "Web Developer", "Business Analyst",
    "Data Scientist", "Cybersecurity Analyst", "Cloud Engineer", "Mobile App Developer",
    "DevOps Engineer", "UI/UX Designer"
]

def extract_text_from_pdf(file_path):
    text = ""
    with fitz.open(file_path) as pdf:
        for page in pdf:
            text += page.get_text()
    return text

def parse_scores(response_text):
    import re
    scores = {}
    lines = response_text.splitlines()
    keys = [
        "Relevance of Skills",
        "Domain-specific Projects",
        "Certifications & Education",
        "Overall Suitability"
    ]
    for i, key in enumerate(keys, start=1):
        pattern = rf"{i}\..*?(\d+)/100"
        for line in lines:
            match = re.search(pattern, line)
            if match:
                scores[key] = int(match.group(1))
                break
    return scores

def analyze_resume_with_scores(resume_text, domain):
    prompt = f"""
    Analyze the following resume for the role of {domain}. Provide scores (out of 100) and suggestions in the format below:

    1. Relevance of Skills: <score>/100
       Suggestion: <text>

    2. Domain-specific Projects: <score>/100
       Suggestion: <text>

    3. Certifications & Education: <score>/100
       Suggestion: <text>

    4. Overall Suitability for {domain}: <score>/100
       Suggestion: <text>

    Resume:
    {resume_text}
    """
    response = model.generate_content(prompt)
    return response.text

HTML_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <title>Resume Analyzer Pro</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #ffd1dc, #ffe4e1);
            margin: 0;
            padding: 0;
            color: #333;
        }
        .home-button {
            position: absolute;
            top: 20px;
            right: 20px;
            background: white;
            color: #ff69b4;
            border: 2px solid #ff69b4;
            padding: 10px 16px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s ease;
        }
        .home-button:hover {
            background: #ff69b4;
            color: white;
        }
        .container {
            max-width: 750px;
            margin: 80px auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 12px 35px rgba(255, 105, 180, 0.3);
            padding: 40px;
            position: relative;
        }
        h2 {
            text-align: center;
            color: #d63384;
            margin-bottom: 25px;
        }
        .upload-area {
            border: 2px dashed #ff69b4;
            padding: 40px;
            text-align: center;
            cursor: pointer;
            border-radius: 12px;
            background: #fff0f5;
        }
        select, input[type=submit], .button-retry {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            margin-top: 20px;
            border-radius: 8px;
            border: 1px solid #ccc;
        }
        input[type=submit], .button-retry {
            background: #ff69b4;
            color: white;
            border: none;
        }
        .box {
            background: #fff;
            border-left: 6px solid #ff69b4;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<a href="http://localhost:5173/" class="home-button">🏠 Go to Home</a>

<div class="container">
    <h2>💗 Resume Analyzer Pro 💗</h2>
    <form method="POST" enctype="multipart/form-data">
        {% if not result %}
            <div class="upload-area" onclick="document.getElementById('fileElem').click()">
                <p>Drag & Drop your PDF resume here or click to upload</p>
                <input type="file" name="resume" id="fileElem" accept=".pdf" style="display:none" required>
            </div>

            <label for="domain">Choose Domain:</label>
            <select name="domain" id="domain" required>
                {% for domain in domains %}
                    <option value="{{ domain }}">{{ domain }}</option>
                {% endfor %}
            </select>

            <input type="submit" value="Analyze Resume">
        {% endif %}
    </form>

    {% if result %}
        <h3>🔍 Analysis Result for <span style="color:#d63384">{{ chosen_domain }}</span></h3>
        {% for box in result.split("\\n\\n") %}
            <div class="box">{{ box | safe }}</div>
        {% endfor %}

        <h3 style="text-align:center; margin-top:40px; color:#d63384;">📊 Score Breakdown</h3>
       <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px;">
    <div style="width: 300px; height: 300px;">
        <canvas id="pieChart" style="width: 100%; height: 100%;"></canvas>
    </div>
    <div style="width: 300px; height: 300px;">
        <canvas id="barChart" style="width: 100%; height: 100%;"></canvas>
    </div>
</div>

        <form method="GET">
            <button class="button-retry">🔁 Upload Another Resume</button>
        </form>
    {% endif %}
</div>

<script>
    {% if scores %}
    const labels = {{ scores.keys()|list|tojson }};
    const values = {{ scores.values()|list|tojson }};

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const barCtx = document.getElementById('barChart').getContext('2d');

    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#d63384'],
                hoverOffset: 6
            }]
        }
    });

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores (out of 100)',
                data: values,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#d63384'],
                borderRadius: 10
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    {% endif %}
</script>
</body>
</html>
"""

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    chosen_domain = None
    scores = None

    if request.method == "POST":
        file = request.files.get("resume")
        domain = request.form.get("domain")
        chosen_domain = domain

        if file and file.filename.endswith(".pdf"):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            file.save(file_path)

            resume_text = extract_text_from_pdf(file_path)
            result = analyze_resume_with_scores(resume_text, domain)

            # Debug output
            print("Analysis Result:", result)

            scores = parse_scores(result)
            print("Parsed scores for pie/bar chart:", scores)

    return render_template_string(HTML_TEMPLATE, domains=DOMAINS, result=result, chosen_domain=chosen_domain, scores=scores)

if __name__ == "__main__":
    app.run(debug=True)
