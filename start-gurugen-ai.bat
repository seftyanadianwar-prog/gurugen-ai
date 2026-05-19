@echo off
cd /d "%~dp0"
echo Starting GuruGen AI...
echo.
echo If AI online is not active, copy .env.example to .env and fill OPENAI_API_KEY.
echo.
start "" http://127.0.0.1:4173
node serve.js
