@ECHO OFF

if exist build rmdir /s /q build
mkdir build

set /p "name=Enter name of extension: "
set /p "vr=Enter version: v"
set "fn=%name% v%vr%"
set "bf=build\%fn%"

mkdir "%bf%"

copy manifest.json "%bf%\"
copy background.js "%bf%\"
xcopy html "%bf%\html\" /E/I
xcopy js "%bf%\js\" /E/I
xcopy css "%bf%\css\" /E/I
xcopy res "%bf%\res\" /E/I

pushd build
tar -acf "%fn%.zip" "%fn%"
ren "%fn%" "%fn% min"
pushd "%fn% min"

REM npm install terser -g
cmd /c terser background.js -c -m -o background.js
if %errorlevel% equ 1 (
    popd
    popd
    echo.
    rmdir /s /q build
    echo Please install terser using `npm install terser -g`
    exit /b
)

pushd js
for /f "delims=" %%x in ('dir /b') do (
    echo minifying js/%%x
    cmd /c terser "%%x" -c -m -o "%%x"
)
popd
popd
tar -acf "%fn% min.zip" "%fn% min"

rmdir /s /q "%fn% min"

popd
explorer build
