---
title: "Firebase: Login Google en Android"
lang: es
---
Implementarás un login con Google en Firebase en tu aplicación Android. Además obtendrás la información del usuario directamente desde Firebase, nombre, correo y fotografía.

[YouTube](https://www.youtube.com/watch?v=rPzHPNOt7Js)

### Aprenderás

* Implementar un Login Google en Firebase
* Obtener información del usuario directamente desde Firebase

### Requisitos

* Haber implementado Login con Google en Android

## Configuración

`build.gradle` del módulo

```groovy
compile 'com.google.firebase:firebase-auth:9.8.0'
```

> Las versiones pueden cambiar rápidamente, se debe considerar usar la misma versión que `play-services-auth`

## Implementación

`FirebaseAuth` & `ListenerFirebaseAuth.AuthStateListener` es el oyente que se encarga de avisarnos cuando estamos autenticados o no. 

Atributos en la *Activity* que se necesite manejar la autenticación.

```java
private FirebaseAuth firebaseAuth;  
private FirebaseAuth.AuthStateListener firebaseAuthListener;
```

Inicialización en el método `onCreate()`

```java
firebaseAuth = FirebaseAuth.getInstance();  
firebaseAuthListener = new FirebaseAuth.AuthStateListener() {  
    @Override
    public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {
        FirebaseUser user = firebaseAuth.getCurrentUser();
        if (user != null) {
            goMainScreen();
        }
    }
};
```

Empezar a escuchar en el método `onStart()` de la *Activity*

```java
firebaseAuth.addAuthStateListener(firebaseAuthListener);
```

Terminar de escuchar en el método `onStop()` de la *Activity*

```java
if (firebaseAuthListener != null) {  
    firebaseAuth.removeAuthStateListener(firebaseAuthListener);
}
```

## Modificaciones

Adición del método `requestIdToken()` al `GoogleSignInOptions`

```java
GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)  
    .requestIdToken(getString(R.string.default_web_client_id))
    .requestEmail()
    .build();
```

Método de autenticación con Firebase

```java
private void firebaseAuthWithGoogle(GoogleSignInAccount signInAccount) {  
    //...
    AuthCredential credential = GoogleAuthProvider.getCredential(signInAccount.getIdToken(), null);
    firebaseAuth.signInWithCredential(credential)
            .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                @Override
                public void onComplete(@NonNull Task<AuthResult> task) {
                    //...
                    if (!task.isSuccessful()) {
                        Toast.makeText(getApplicationContext(), "Authentication failed.", Toast.LENGTH_SHORT).show();
                    }
                }
            });
}
```

Llamado luego de que la autenticación con Google fue exitosa.

```java
firebaseAuthWithGoogle(result.getSignInAccount());
```

## Información del usuario

Se puede acceder al usuario actual desde cualquier parte de nuestra aplicación mediante el método `getCurrentUser()` del `FirebaseAuth`.

Si el método `getCurrentUser()` es `null` nadie se autenticó en la aplicación.

```java
FirebaseUser user = firebaseAuth.getCurrentUser();  
if (user != null) {  
    nameTextView.setText(user.getDisplayName());
    emailTextView.setText(user.getEmail());
    idTextView.setText(user.getUid());
    Glide.with(getApplicationContext()).load(user.getPhotoUrl()).into(photoImageView);
} else {
    goLogInScreen();
}
```

## Cerrar sesión y revocar acceso

Basta con usar el método `signOut()` del `FirebaseAuth` en cualquier parte de nuestra aplicación seguida del cierre de sesión o revoco de acceso de Google.

```java
public void logOut(View view) {  
    firebaseAuth.signOut();

    // Sign Out Google...
}
```

```java
public void revoke(View view) {  
    firebaseAuth.signOut();

    // Revoke Access Google...
}
```

## El código

Código completo en:

*  [Repositorio en GitHub](https://github.com/adanieldev/FirebaseGoogleSignInAndroid) 
*  [Descargar código](https://github.com/adanieldev/FirebaseGoogleSignInAndroid/archive/master.zip) 