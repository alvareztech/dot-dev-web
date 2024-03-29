---
title: "Firebase: Login Facebook en Android"
lang: es
---

Implementarás el inicio de sesión con Facebook en tu aplicación Android usando *Firebase Authentication*. Además obtendrás la información del usuario.

[YouTube](https://www.youtube.com/watch?v=YO6Xx5glLPE)

### Aprenderás
* Implementar el inicio de sesión con Facebook en una aplicación.

### Requisitos
* Configurar el SDK de Facebook
* Implementar Login con Facebook

## Introducción
0:14 Alternativas para implementar autenticación en Facebook:
* Firebase SDK 0:37
* Firebase UI 0:41
    * Librería de código abierto para facilitar el uso de los servicios de Firebase.
    * [Repositorio en GitHub](https://github.com/firebase/FirebaseUI-Android)
        
## Configuración
1:20

* Configurar el SDK de Facebook
* Implementación de Login con Facebook

## Implementación
1:40

### Obtener el certificado SHA-1 (2:01)
Para Windows

```
keytool -exportcert -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
```

Para MacOS y linux

```
keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
```

> La contraseña por defecto del `debug.keystore` es `android`.

* [Más información](https://developers.google.com/android/guides/client-auth)

## Código

Código completo de la aplicación:

* [GitHub Gist](https://gist.github.com/adanieldev/8c38122832535b20f4afc42c5b0b9366)