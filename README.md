## Framework utilizado para el  desarrollo de esta aplicación

para la instalación de este framework nos vamos a ceñir a la documentación que se encuentra en la pagina de nativescript.org

aqui puede encontrar la información sobre como se instala nativescript
https://docs.nativescript.org/angular/start/quick-setup

---
# paso 1
## Debe tener instalado node.js para ejecutar este comando

`npm install -g nativescript`

# paso 2
## instalación rápida de nativescript

abra la consola de cmd y coloque el siguiente comando para instalar todas las dependencias necesarias para la ejecución de nativescript

`@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"`

despues de la instalación usted tendra configurado todos estos archivos:

- The latest stable official release of Node.js (LTS) 8.x
- Google Chrome
- JDK 8
- Android SDK
- Android Support Repository
- Google Repository
- Android SDK Build-tools 28.0.3 or a later stable official release
- Android Studio 
- Set up Android virtual devices to expand your testing options


### LISTO

# Como ejecutar la aplicación en tu telefono

# paso 1
clona la rama `master` de este repositorio

# paso 2
ejecuta el comando `npm install` para bajar todas las dependencias necesarias

# paso 3
ejecuta el comando `tns platform add android` para añadir la carpeta de la plataforma sobre la cual va a ejecutar la aplicación en caso de ser IOS ejecute `tns platform add ios`

## ADVERTENCIA!! 
esta aplicación solo funcionara correctamente si usted esta ejecutando la API rest con ngrok de lo contrario no podra ver ninguna actividad

# paso 4
cuando ya este ejecutando la ApiRestYucapp abra un tunel con https://ngrok.com con este comando

`.\ngrok http http://localhost:3000` copie y pegue la ruta que le da ngrok en el archivo `Yucapp\src\database\host.database.ts`

pega la url en la siguiente variable...
`export const host = 'https://2a7ea642.ngrok.io';  <---- modifique esta variable con la url que le da ngrok cuando realiza el tunel a la api rest`

# paso 5

ejecute el comando `tns run android` para correr la aplicación en su teléfono y listo



