---
title: "Implement Bottom Navigation View for Android"
lang: en
---
Implementation of a Bottom Navigation View in an Android application. Component available from the compatibility library 25.

<iframe width="480" height="270" src="https://www.youtube.com/embed/aTPwcWQIckw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### What you'll learn

* Use the `BottomNavigationView` component

### What you'll need

* Compatibility library 25 or higher

## Dependency
Dependency addition (0.48)

```groovy
compile 'com.android.support:design:25.0.0'
```

## Adding  the component

Adding the `BottomNavigationView` (1.08)

```xml
<android.support.design.widget.BottomNavigationView  
    android:id="@+id/bottomNavigationView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

## Menu

Menu creation (1.38)

`menu_navigation.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>  
<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/inicioItem"
        android:icon="@drawable/ic_home"
        android:title="@string/inicio" />

    <item
        android:id="@+id/buscarItem"
        android:icon="@drawable/ic_search"
        android:title="@string/buscar" />

    <item
        android:id="@+id/camaraItem"
        android:icon="@drawable/ic_camera_alt"
        android:title="@string/camara" />

    <item
        android:id="@+id/favoritosItem"
        android:icon="@drawable/ic_favorite"
        android:title="@string/favoritos" />

    <item
        android:id="@+id/perfilItem"
        android:icon="@drawable/ic_person"
        android:title="@string/perfil" />

</menu>
```

## The Code
The complete code:

* [GitHub Repository](https://github.com/adanieldev/BottomNavigationViewSample)
* [Download ZIP](https://github.com/adanieldev/BottomNavigationViewSample/archive/master.zip)

After you download or clone the project you can import it with the "Import Project" option from Android Studio.

## Remove animation

If you want to not have the zoom animation when the option changes (shift mode) there is no method that allows this, but you can use this:

```java
private void removeShiftMode(BottomNavigationView bottomNavigationView) {
    BottomNavigationMenuView menuView = (BottomNavigationMenuView) bottomNavigationView.getChildAt(0);
    try {
        Field shiftingMode = menuView.getClass().getDeclaredField("mShiftingMode");
        shiftingMode.setAccessible(true);
        shiftingMode.setBoolean(menuView, false);
        shiftingMode.setAccessible(false);
        for (int i = 0; i < menuView.getChildCount(); i++) {
            BottomNavigationItemView item = (BottomNavigationItemView) menuView.getChildAt(i);
            //noinspection RestrictedApi
            item.setShiftingMode(false);
            //noinspection RestrictedApi
            item.setChecked(item.getItemData().isChecked());
        }
    } catch (NoSuchFieldException e) {
    } catch (IllegalAccessException e) {
    }
}
```

You can download the same example with this change.

* [GitHub repository](https://github.com/adanieldev/BottomNavigationViewSample/tree/remove-shift)
* [Download ZIP](https://github.com/adanieldev/BottomNavigationViewSample/archive/remove-shift.zip)

## With Fragments

If you want an example with fragments I leave it here:

* [GitHub repository](https://github.com/adanieldev/BottomNavigationViewSample/tree/fragments)
* [Download ZIP](https://github.com/adanieldev/BottomNavigationViewSample/archive/fragments.zip)

## Resources

* [Official documentation](https://developer.android.com/reference/android/support/design/widget/BottomNavigationView.html)
* [Design guide](https://material.io/design/components/bottom-navigation.html)