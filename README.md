DEPENDENCIAS:

> react-navigation (npm install @react-navigation/native) e (npm install react-native-screens react-native-safe-area-context),
    > npm install @react-navigation/bottom-tabs
    > npm install @react-navigation/native-stack
> axios (npm install axios@0.26.0),
> icons (npm install --save react-native-vector-icons),
> snap-carousel (npm i react-native-snap-carousel@4.0.0-beta.6)

ICONS:
O icons requer uma configuração a mais:

- Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

-To customize the files being copied, add the following instead:

project.ext.vectoricons = [
    iconFontNames: [ 'Feather.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"