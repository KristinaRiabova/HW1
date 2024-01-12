import requests

url = "http://localhost:3000/api/data"

response = requests.get(url)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")

