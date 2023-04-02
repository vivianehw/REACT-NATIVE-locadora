import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // AREA //
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#0c0c0c'
    },
    carouselArea: {
        flex: 1,
        marginBottom: 20,
    },
    descPosterArea: {
        flex: 1,
        height: 280,
        overflow: 'hidden',
    },

    // TEXTO //
    h1: {
        fontSize: 40,
        marginLeft: 10,
        marginBottom: 7,
        color: 'white'
    },
    h2: {
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 7,
        color: 'white'
    },
    h3: {
        fontSize: 25,
        color: 'white'
    },

    // IMAGEM //
    posterImg: {
        height: 375,
        width: 250,
        margin: 10,
        borderRadius: 10,
    },
    posterImgSmall: {
        height: 300,
        width: 200,
        margin: 10,
        borderRadius: 10,
    },
    posterImgSmaller: {
        height: 270,
        width: 180,
        margin: 10,
        borderRadius: 10,
    },

    // BOTAO e INPUT //
    btnArea: {
        marginBottom: 25,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#c10307',
    },
    /*
    inputArea: {
        height: 40,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    */
});

export default styles;
