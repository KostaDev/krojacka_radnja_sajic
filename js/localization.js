let defaultLocale = "sr";
let translations = {};

let currentLocale = "";
document.addEventListener('DOMContentLoaded',()=>{
    setLocale(defaultLocale);
});

const setLocale = async (newLocale) => {
    if(newLocale === currentLocale){
        return;
    }
    currentLocale = newLocale;
    translations = await fetchTranslations(newLocale);
    console.log("translations: ",translations);
    translatePage();

}

const fetchTranslations = async (newLocale) => {
    const response = await fetch(`/resource/lang/${newLocale}.json`);
    return await response.json();
}
const translatePage = () =>{
    document.querySelectorAll('[localization-key]').forEach((element) =>{
        let key = element.getAttribute('localization-key');
        let translation = translations[key];
        element.innerText = translation;
    })
}
// const switcherElements = document.getElementsByClassName('dropdown-content');
console.log(document.getElementsByClassName('dropdown-content-item'));
// for (let index = 0; index < switcherElements.length; index++) {
//     for (let j = 0; j < switcherElements[index].children.length; j++) {
//         switcherElements[index].children[j].onclick = (e) => {
//             setLocale(e.target.attributes.value.value);
//     }
// }
// }
const switcherElements = document.getElementsByClassName('dropdown-content-item');
for (let index = 0; index < switcherElements.length; index++) {
    switcherElements[index].onclick = (e) =>{
        setLocale(e.target.attributes.value.value);
    }
    
}
