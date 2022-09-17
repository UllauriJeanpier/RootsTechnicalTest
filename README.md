# RootsTechnicalTest - Intrucciones

Esta prueba se realizó en el entorno de React Native -> https://reactnative.dev/docs/environment-setup

## Instalación

Primero es necesario clonar el repositorio y ubicarse en la rama master

```
git clone https://github.com/UllauriJeanpier/RootsTechnicalTest.git
```

Una vez se tenga el repositorio descargado, es necesario instalar todas las dependencias mediante yarn o npm

```
yarn install 
```
O

```
npm install
```

Habiendo instalado todas las dependencias, el siguiente paso es ejecutar la aplicación, para esto se recomienda tener 
un emulador de android ejecutando o haber conectado un dispositivo físico con la opción de depuración por usb habilitada.

Para ejecutar el proyecto se recomienda abrir 2 consolas y ubicarlas en la carpeta del proyecto

En la primera consola ejecutar el comando 

```
yarn run start
```
O

```
npm run start
```

En la segunda consola ejecutar el comando

```
yarn run android
```
O

```
npm run android
```

Estas son imágenes de los 2 layaout creados

![image](https://user-images.githubusercontent.com/42878195/190875674-786e51ad-0383-4f5a-a79c-0e9576b2ef39.png)
![image](https://user-images.githubusercontent.com/42878195/190875740-38fd22fa-ae9c-4584-976e-ea538a35288f.png)

## Observaciones

Aqui se dejan algunas observaciones sobre la aplicación.

Las dos rutas que se enviaron suelen estar caidas la mayor parte del tiempo, es por eso que la prueba se desarrollo tomando en cuenta esto

*Primer Layout*
* Corresponde la login, se hizo una pequeña validacion para que los 2 campos, tanto el username como el password
tengan que tener mas de 4 caracteres para que sean válidos. 

![image](https://user-images.githubusercontent.com/42878195/190875966-d9117e74-ca78-407c-806c-098b14e1d59a.png)

* En el caso del servicio para el login, debido a que este casi siempre estaba caído y cuando se encontraba funcionando devolvía error 500, se opto
por precindir de la validación de la respuesta, es por eso se puede avanzar a la pantalla siguiente con cualquier usuario ingresado, el servicio se usa
de todas maneras.

*Segundo Layout*
* Corresponde al home, se coloco una pantalla de carga que se mostrará mientras se consulta al servicio.

![image](https://user-images.githubusercontent.com/42878195/190876283-34a1e5b3-13b3-481f-a0de-6d9d7721dcb4.png)

* En el caso del servicio para el home no devuelve nada, se coloco un archivo .json con los datos de la respuesta esto permite mostrar datos este o no 
el servicion funcionando.

![image](https://user-images.githubusercontent.com/42878195/190876477-f9ae1473-49c8-4cf1-8213-3c266c4fd8ad.png)















