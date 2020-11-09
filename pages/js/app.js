let pet = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

const burger = document.querySelector('.img__nav')
const burgerImg = document.querySelector('.img__nav__burger')

function hideBurger() {

    document.querySelector('.submenu').classList.toggle('show')

    document.querySelector('.header__logo').style.visibility = 'visible'
    document.querySelector('.img__nav').style.display = 'block'
    document.querySelector('.popup2').style.display = 'none'

    setTimeout(() => document.querySelector('.header').classList.add('overflow'), 300)
    document.querySelector('body').classList.toggle('scroll__hidden')


}


function showBurger() {

    document.querySelector('.submenu').classList.add('show')
    document.querySelector('.header__logo').style.visibility = 'hidden'
    document.querySelector('.header').classList.toggle('overflow')
    document.querySelector('.img__nav').style.display = 'none'
    document.querySelector('.popup2').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')

}

window.addEventListener('resize', function () {
    if (window.innerWidth > 666) {
        document.querySelector('.img__nav').style.display = 'none'
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth <= 666) {
        document.querySelector('.img__nav').style.display = 'block'
    }
});


// Popup

const ourFriendsPets = document.querySelector('.our__friends__pets')

// function showModal() {
//     console.log('work')
//     document.querySelector('.popup').style.display = 'block'
//     setPopupPicture()
//
// }

// function hideModal() {
//     if (document.querySelector('.popup').style.display == 'block') {
//         console.log('work')
//         document.querySelector('.popup').style.display = 'none'
//     }
// }


//popup content

const popupImg = document.querySelector('.popup__img')
const petType = document.querySelector('.pet__type')
const petBreed = document.querySelector('.pet__breed')
const petDescription = document.querySelector('.pet__description')
const petAge = document.querySelector('.age')
const petInoculations = document.querySelector('.inoculations')
const petDiseases = document.querySelector('.diseases')
const petParasites = document.querySelector('.parasites')
const petName = document.querySelector('.pet__name')


const woody = document.querySelector('.woody')
const jennifer = document.querySelector('.jennifer')
const sophia = document.querySelector('.sophia')
const scarlett = document.querySelector('.scarlett')
const katrine = document.querySelector('.katrine')
const timmy = document.querySelector('.timmy')
const freddie = document.querySelector('.freddie')
const charly = document.querySelector('.charly')


function jenniferShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[0].img
    petName.innerHTML = pet[0].name
    petType.innerHTML = `${pet[0].type} - `
    petBreed.innerHTML = pet[0].breed
    petDescription.innerHTML = pet[0].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[0].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[0].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[0].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[0].parasites}`

}

function sophiaShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[1].img
    petName.innerHTML = pet[1].name
    petType.innerHTML = `${pet[1].type} - `
    petBreed.innerHTML = pet[1].breed
    petDescription.innerHTML = pet[1].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[1].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[1].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[1].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[1].parasites}`

}

function woodyShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[2].img
    petName.innerHTML = pet[2].name
    petType.innerHTML = `${pet[2].type} - `
    petBreed.innerHTML = pet[2].breed
    petDescription.innerHTML = pet[2].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[2].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[2].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[2].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[2].parasites}`

}

function scarlettShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[3].img
    petName.innerHTML = pet[3].name
    petType.innerHTML = `${pet[3].type} - `
    petBreed.innerHTML = pet[3].breed
    petDescription.innerHTML = pet[3].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[3].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[3].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[3].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[3].parasites}`

}

function katrineShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[4].img
    petName.innerHTML = pet[4].name
    petType.innerHTML = `${pet[4].type} - `
    petBreed.innerHTML = pet[4].breed
    petDescription.innerHTML = pet[4].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[4].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[4].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[4].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[4].parasites}`
}

function timmyShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[5].img
    petName.innerHTML = pet[5].name
    petType.innerHTML = `${pet[5].type} - `
    petBreed.innerHTML = pet[5].breed
    petDescription.innerHTML = pet[5].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[5].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[5].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[5].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[5].parasites}`
}

function freddieShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[6].img
    petName.innerHTML = pet[6].name
    petType.innerHTML = `${pet[6].type} - `
    petBreed.innerHTML = pet[6].breed
    petDescription.innerHTML = pet[6].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[6].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[6].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[6].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[6].parasites}`
}

function charlyShow() {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('body').classList.add('scroll__hidden')
    popupImg.src = pet[7].img
    petName.innerHTML = pet[7].name
    petType.innerHTML = `${pet[7].type} - `
    petBreed.innerHTML = pet[7].breed
    petDescription.innerHTML = pet[7].description
    petAge.innerHTML = `<strong>Age:</strong> ${pet[7].age}`
    petInoculations.innerHTML = `<strong>Inoculations:</strong> ${pet[7].inoculations}`
    petDiseases.innerHTML = `<strong>Diseases:</strong> ${pet[7].diseases}`
    petParasites.innerHTML = `<strong>Parasites:</strong> ${pet[7].parasites}`
}


const modalButton = document.querySelector('.modal__button')

function closeModal() {
    document.querySelector('.popup').style.display = 'none'
    document.querySelector('body').classList.toggle('scroll__hidden')
}

const rightArrow = document.querySelector('.right__arrow')
const leftArrow = document.querySelector('.left__arrow')


let petsList = document.querySelectorAll('.our__friends__pets')

const pets = {
    0: katrine,
    1: jennifer,
    2: woody,
    3: sophia,
    4: timmy,
    5: charly,
    6: scarlett,
    7: freddie,
}


//nextPet2()
//let current3 = 0;

function nextDraw() {
    console.log(current3)

    if (current3 === 5) {
        petsList[current3].style.display = 'none'
        petsList[current3 + 1].style.display = 'block'
        petsList[current3 + 2].style.display = 'block'
        petsList[current3 - 5].style.display = 'block'
        current3++
    } else if (current3 === 6) {
        petsList[current3].style.display = 'none'
        petsList[current3 + 1].style.display = 'block'
        petsList[current3 - 6].style.display = 'block'
        petsList[current3 - 5].style.display = 'block'
        current3++
    } else if (current3 === 7) {
        petsList[current3].style.display = 'none'
        petsList[current3 - 7].style.display = 'block'
        petsList[current3 - 6].style.display = 'block'
        petsList[current3 - 5].style.display = 'block'
        current3 = 0
    } else {
        petsList[current3].style.display = 'none'
        petsList[current3 + 1].style.display = 'block'
        petsList[current3 + 2].style.display = 'block'
        petsList[current3 + 3].style.display = 'block'
        current3++
    }
}

function previousDraw() {

    if (current3 === 0) {
        petsList[current3 + 2].style.display = 'none'
        petsList[current3 + 1].style.display = 'block'
        petsList[current3].style.display = 'block'
        petsList[current3 + 7].style.display = 'block'
        current3 = 7
    } else if (current3 === 7) {
        petsList[1].style.display = 'none'
        petsList[0].style.display = 'block'
        petsList[7].style.display = 'block'
        petsList[6].style.display = 'block'
        current3 = 6
    } else if (current3 === 6) {
        petsList[0].style.display = 'none'
        petsList[7].style.display = 'block'
        petsList[6].style.display = 'block'
        petsList[5].style.display = 'block'
        current3 = 5
    } else if (current3 === 5) {
        petsList[7].style.display = 'none'
        petsList[6].style.display = 'block'
        petsList[5].style.display = 'block'
        petsList[4].style.display = 'block'
        current3--
    } else if (current3 === 4) {
        petsList[6].style.display = 'none'
        petsList[5].style.display = 'block'
        petsList[4].style.display = 'block'
        petsList[3].style.display = 'block'
        current3--
    } else if (current3 === 3) {
        petsList[5].style.display = 'none'
        petsList[4].style.display = 'block'
        petsList[3].style.display = 'block'
        petsList[2].style.display = 'block'
        current3--
    } else if (current3 === 2) {
        petsList[4].style.display = 'none'
        petsList[3].style.display = 'block'
        petsList[2].style.display = 'block'
        petsList[1].style.display = 'block'
        current3--
    } else if (current3 === 1) {
        petsList[3].style.display = 'none'
        petsList[2].style.display = 'block'
        petsList[1].style.display = 'block'
        petsList[0].style.display = 'block'
        current3--
    }


    // petsList[current3].style.display = 'block'
    // petsList[petsList.length].style.display = 'block'
    // current3 = petsList.length
}

document.querySelector('.header__logo').onclick = function () {
    document.location.href = "https://rolling-scopes-school.github.io/wh1teee-JS2020Q3/shelter/pages/main/index.html";
}

document.querySelector('.active').addEventListener('click', hideBurger)
burgerImg.addEventListener('click', hideBurger)
document.querySelector('.popup2').addEventListener('click', hideBurger)
burger.addEventListener('click', showBurger)


// ourFriendsPets.addEventListener('click', showModal)
woody.addEventListener('click', woodyShow)
// woody.addEventListener('click', onClickElem)
jennifer.addEventListener('click', jenniferShow)
sophia.addEventListener('click', sophiaShow)
scarlett.addEventListener('click', scarlettShow)
katrine.addEventListener('click', katrineShow)
timmy.addEventListener('click', timmyShow)
freddie.addEventListener('click', freddieShow)
charly.addEventListener('click', charlyShow)
modalButton.addEventListener('click', closeModal)


// rightArrow.onclick = function () {
//
// // }
// leftArrow.addEventListener('click', previousDraw)
// rightArrow.addEventListener('click', nextDraw)

// document.body.addEventListener('click', hideModal)

