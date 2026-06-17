import re

files = ['index.html', 'didactics.html', 'schedules.html', 'policies.html', 'resources.html', 'wellness.html', 'recruitment.html', 'phone-directory.html']

emoji_pattern = re.compile("["
    u"\U0001F300-\U0001F5FF"
    u"\U0001F600-\U0001F64F"
    u"\U0001F680-\U0001F9FF"
    u"\U00002702-\U000027B0"
    u"\U000024C2-\U0001F251"
    u"\U0001F004-\U0001F0CF"
    u"\U0001F1E0-\U0001F1FF"
    u"\u2600-\u26FF"
    u"\u2700-\u27BF"
    "]+", flags=re.UNICODE)

for fname in files:
    try:
        with open(fname, 'r') as f:
            content = f.read()
        cleaned = emoji_pattern.sub('', content)
        # clean up double spaces left behind
        cleaned = re.sub(r'  +', ' ', cleaned)
        with open(fname, 'w') as f:
            f.write(cleaned)
        print(f"Cleaned: {fname}")
    except Exception as e:
        print(f"Error on {fname}: {e}")
