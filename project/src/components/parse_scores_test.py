import re

def parse_scores(response_text):
    scores = {}
    patterns = {
        "Relevance of Skills": r"1\. Relevance of Skills: (\d+)/100",
        "Domain-specific Projects": r"2\. Domain-specific Projects: (\d+)/100",
        "Certifications & Education": r"3\. Certifications & Education: (\d+)/100",
        "Overall Suitability": r"4\. Overall Suitability.*?: (\d+)/100",
    }
    for key, pattern in patterns.items():
        match = re.search(pattern, response_text)
        if match:
            scores[key] = int(match.group(1))
    return scores

response_text = """
1. **Relevance of Skills:** 75/100 Suggestion: While the resume lists relevant skills like Python, NumPy, Pandas, and mentions experience with regression models, it needs to strengthen the presentation. Quantify the impact of skills used in projects (e.g., "Improved model accuracy by 15% using hyperparameter tuning"). Prioritize AI/ML specific skills over general web development skills (React, Node, Django, Spring Boot). Emphasize experience with deep learning frameworks like TensorFlow or PyTorch if applicable. Mention cloud platforms like AWS, Azure, or GCP if you have experience.
2. **Domain-specific Projects:** 80/100 Suggestion: The projects demonstrate good application of AI/ML principles. However, they lack detail. Elaborate on the methodologies used (e.g., which algorithms were used for "personalized recipes," how "real-time monitoring" was implemented, specific techniques used for "intelligent decision logic"). Quantify the results (e.g., "Reduced spam messages by X%," "Improved career recommendation accuracy by Y%"). Include links to GitHub repositories if available. Consider adding a project that showcases experience with deep learning or more complex ML models.
3. **Certifications & Education:** 60/100 Suggestion: While the CGPA is good, the certifications listed are very general ("CyberSecurity Essential," "Networking Essential"). Pursue more specialized certifications relevant to AI/ML, such as those offered by Google, AWS, or deeplearning.ai. Highlight relevant coursework related to AI/ML, statistics, or data science. Since the candidate is still pursuing their degree, consider including expected graduation date.
4. **Overall Suitability for AI/ML Developer:** 75/100 Suggestion: The resume shows potential for an AI/ML Developer role, especially given that the candidate is still an undergraduate. However, it needs to be more focused and impactful. Prioritize and highlight AI/ML related experiences and skills. Quantify achievements and provide more context to projects. Pursue specialized certifications and highlight relevant coursework. Streamline the presentation by removing unnecessary personal information (date of birth, nationality) and focusing on professional details. The problem-solving statistics from LeetCode and CodeChef can be briefly mentioned in the skills section, but avoid dedicating a separate "Declaration" section. The resume lacks a strong summary or objective statement that clearly communicates career goals and aspirations within AI/ML. Adding a concise and impactful summary at the beginning would greatly enhance the resume's effectiveness. Rewrite the internship descriptions using action verbs and quantifiable achievements. For example, instead of "Contributed to Android app development," write "Developed features for an Android app that resulted in a 10% increase in user engagement."
"""

scores = parse_scores(response_text)
print("Parsed scores:", scores)
