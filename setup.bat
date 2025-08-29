@echo off
echo ========================================
echo    Portfolio Website Setup Script
echo ========================================
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Choose the LTS version for best compatibility.
    echo.
    pause
    exit /b 1
)

echo Node.js is installed!
echo.

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    echo.
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.
echo Starting the development server...
echo.
echo Your portfolio will open in your browser at: http://localhost:3000
echo.
echo To stop the server, press Ctrl+C in this window.
echo.

npm start

pause

