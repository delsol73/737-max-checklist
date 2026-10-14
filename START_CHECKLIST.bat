@echo off
setlocal
set "APP_URL=file:///%~dp0index.html"
set "APP_URL=%APP_URL:\=/%"
set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" goto launch
set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" goto launch
set "EDGE=%LocalAppData%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" goto launch
REM Edge missing: opens default browser instead.
start "" "%~dp0index.html"
exit /b
:launch
start "" "%EDGE%" --app="%APP_URL%" --window-size=1200,800
exit /b
