rem Dependency: https://github.com/lltcggie/waifu2x-caffe/releases

@ECHO OFF
set "inp=icon.png"
set waifu2xcui="C:\Program Files (x86)\waifu2x-caffe\waifu2x-caffe-cui.exe"
echo Processing 1
%waifu2xcui% -i %inp% -o res\images\logo_128.png -w 128 -h 128 -p cpu
echo Processing 2
%waifu2xcui% -i %inp% -o res\images\logo_48.png -w 48 -h 48 -p cpu
echo Processing 3
%waifu2xcui% -i %inp% -o res\images\logo_32.png -w 32 -h 32 -p cpu
echo Processing 4
%waifu2xcui% -i %inp% -o res\images\logo_16.png -w 16 -h 16 -p cpu
echo All Done
