import requests
import string
from time import perf_counter

base_url = "https://interlos-password.iamroot.eu/check_password/"

start = perf_counter()
response = requests.get(base_url + "HVEZDARNY")
print(response.json())
end = perf_counter()

print (start-end)
