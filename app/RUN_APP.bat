@echo off
echo ========================================
echo  Starting Golf Scoring App
echo ========================================
echo.
echo [1/3] Stopping any running servers...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul
echo.
echo [2/3] Clearing cache...
if exist .expo rmdir /s /q .expo >nul 2>&1
if exist node_modules\.cache rmdir /s /q node_modules\.cache >nul 2>&1
echo.
echo [3/3] Starting Expo server...
echo.
npx expo start --clear
pause
