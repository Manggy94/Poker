from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response
from math import exp


matrix = []
ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
for i in range(13):
    line = []
    for j in range(13):
        if i<j:
            hand = ranks[i]+ranks[j]+"s"
        elif i>j:
            hand = ranks[j]+ranks[i]+"o"
        else:
            hand = 2*ranks[i]
        val = 1/(exp(i/10)+exp(j/20))
        line.append((hand, round(val, 3)))
    matrix.append(line)

dict = {}
for line in matrix:
    for bloc in line:
        dict[bloc[0]] =  bloc[1]

app = FastAPI()
origins = [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:8082",
    "http://localhost",
]
app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    )
@app.get("/")
async def hello_world():
    return dict