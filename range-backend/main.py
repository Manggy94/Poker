import uvicorn
from fastapi import FastAPI

app = FastAPI()

print(app)

@app.get("/")
async def hello_world():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1")