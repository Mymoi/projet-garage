// ECF - Evaluation Graduate Développeur Web et Web Mobile
// Réalisation par : Voahiranirina Myriam RAJERIARISOA
//  Date : Février 2024
//  Projet : création du site internet du Garage V. Parrot

//Prise en compte des données de connexion de l'utilisateur (employé et administrateur) déjà inscrit
const el1 = document.getElementById('connexion-custom-form')
el1.addEventListener('submit', (event) =>{
  event.preventDefault()

  let email = event.target.email.value
  let pwd = event.target.password.value

  if (email && pwd) {
    alert(`Bonjour, vous allez être redirigé votre page client.`)
    }
    else {
    alert(`Suite à un problème technique votre page client est indisponible.`)
    }
 })

 //Prise en compte des informations du formulaire du visiteur, qui souhaite contacter le Garage V. Parrot
const el2 = document.getElementById('register-custom-form')
el2.addEventListener('submit', (event) =>{
  event.preventDefault()

  let civility = event.target.female.checked ? 'female' : 'male'
  let name = event.target.name.value
  let category = event.target.category.value
  let cgv = event.target.cgv.checked
  

  let myCivility = civility === 'female' ? 'Madame' : 'Monsieur'
  let myName = name.toUpperCase()
  let myCategory

  switch (category) {
    case "hunter-gather":
      myCategory = "Cueilleur";
      break;

    case "gargantuan":
      myCategory = "Gargantuesque";
      break;

    case "modern":
        myCategory = "Moderne";
        break;

    default:
      myCategory = "Aucune catégorie";
      break;
  } 


  if (cgv) {
    alert(`Merci pour votre message ${myCivility} ${myName}, \n Nous allons vous contacterpour répondre à votre demande de, ${myCategory}. `)
    }
    else {
    alert(`Merci de cocher la case des conditions générales ${myCivility} ${myName}, pour valider votre enregistrement.`)
    }
 })

