@echo off
echo Instalando dependencias...
npm install

echo Instalando navegadores...
npx playwright install

echo Listo para ejecutar tests 🚀
pause