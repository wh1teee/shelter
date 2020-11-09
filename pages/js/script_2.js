const burgerIcon = document.querySelector('.menu-hidden');
const menuMobile = document.querySelector('.main-menu');
const darkScreen = document.querySelector('.darken');
const linkActive = document.querySelector('.link-normal_active');
const headerLogo = document.querySelector('.header-logo');
const btnRight = document.querySelector('.bnt-round-right');
const btnLeft = document.querySelector('.bnt-round-left');


// to disable scrolling
function disableScrolling(){
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}

// to close burger-menu
function closeBurgerMenu () {
    menuMobile.classList.remove('main-menu_active');
    burgerIcon.classList.remove('menu-hidden_active');
    darkScreen.classList.remove('darken_active');
    document.body.classList.remove('stop-scroll');
    headerLogo.classList.remove('header-logo_active');
    
    enableScrolling();
};

// to open burger-menu
function openBurgerMenu () {
    menuMobile.classList.add('main-menu_active');
    burgerIcon.classList.add('menu-hidden_active');
    darkScreen.classList.add('darken_active');
    document.body.classList.add('stop-scroll');
    headerLogo.classList.add('header-logo_active');
    disableScrolling();
};

// burger-handler

function burgerMenuWork () {
    // onclick on burger
    burgerIcon.addEventListener('click', () => { // open burger-menu
        if (burgerIcon.classList.contains('menu-hidden_active')) {
            closeBurgerMenu();           
        } else {
           openBurgerMenu();
        }   
    });

    // onclick on the darken part
    darkScreen.addEventListener('click', () => {
        if (darkScreen.classList.contains('darken_active')) {
            closeBurgerMenu();           
        };
    });
    
    //onclick on active link
    linkActive.addEventListener('click', () => {
        if (burgerIcon.classList.contains('menu-hidden_active')) {
            closeBurgerMenu();        
        };
    });
};



// run
burgerMenuWork();

const petsArray = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/Jennifer.png",
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
      "img": "../../assets/images/sophia.png",
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
      "img": "../../assets/images/Woody.png",
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
      "img": "../../assets/images/scarlett.png",
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
      "img": "../../assets/images/Katrine.png",
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
      "img": "../../assets/images/timmy.png",
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
      "img": "../../assets/images/freddie.png",
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
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

  //create randomized array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      let t = array[i]; 
      array[i] = array[j]; 
      array[j] = t
      
    };
    return array;
  };

  // shuffle our array
  shuffle(petsArray);

  let petsAll = [];
  for (let i = 0; i < 6; i++) {
      petsAll = petsAll.concat(petsArray);
  }

  function petCard (pet) {
    return `
    <div class="pet-card popup-link" id="${pet.name}">
      <div class="pet-img">
          <img src="${pet.img}" alt="${pet.name}">
      </div>
      <p class="pet-name">${pet.name}</p>
      <button class="btn-stroked">
          <p class="p-bnt-filled">Learn more</p>
      </button>
    </div>
    `
  };
  

  // make pet-cards - works
  function createPetCards () {
    document.getElementById("pet-cards__container").innerHTML = `
    ${petsAll.map(petCard).join('')}
    `;
  }
 
  //run
  createPetCards();


  // swipe to right
function swipeToRight () {
    
    if (document.documentElement.clientWidth > 1199) {
        let petCut = petsAll.splice(0, 3);
        petsAll.splice(petsAll.length, 0, petCut[0], petCut[1], petCut[2]);
    //    console.log('our array: ', petsAll);
        createPetCards();
        
    } else if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth <= 1199) {
        let petCut = petsAll.splice(0, 2);
        petsAll.splice(petsAll.length, 0, petCut[0], petCut[1]);
    //    console.log('our array: ', petsAll);
        createPetCards();
    } else if (document.documentElement.clientWidth <= 768) {
        let petCut = petsAll.splice(0, 1);
        petsAll.splice(petsAll.length, 0, petCut[0]);
    //    console.log('our array: ', petsAll);
        createPetCards();
    };

};

function swipeToLeft () {
    
    if (document.documentElement.clientWidth > 1199) {
        let petCut = petsAll.splice(petsAll.length - 3, 3);
        petsAll.splice(0, 0, petCut[0], petCut[1], petCut[2]);
    //    console.log('our array: ', petsAll);
        createPetCards();
        
    } else if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth <= 1199) {
        let petCut = petsAll.splice(petsAll.length - 2, 2);
    //    console.log(petCut);
        petsAll.splice(0, 0, petCut[0], petCut[1]);
    //    console.log('our array: ', petsAll);
        createPetCards();
    } else if (document.documentElement.clientWidth <= 768) {
        let petCut = petsAll.splice(petsAll.length - 1, 1);
        petsAll.splice(0, 0, petCut[0]);
    //    console.log('our array: ', petsAll);
        createPetCards();
    };

};

// swipe to right on click
  btnRight.addEventListener('click', swipeToRight);

  btnLeft.addEventListener('click', swipeToLeft);

//make popup

const popupLinks = document.querySelectorAll('.popup-link'); // все объекты, по клике на которые открываются попапы
const popupCloseIcon = document.querySelector('.popup-close');
const popupDark = document.querySelector('.popup-dark');



const timeout = 300;



if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index]; // текущая карточка
        popupLink.addEventListener('click', function  () {
            const popupName = popupLink.getAttribute('id'); // id = pet name
            console.log(popupName);
            const currentPopup = document.getElementById('popup'); // блок, который открывать
            
            // здесь надо построение окна попапа
            for (let i = 0; i < petsArray.length; i++) {
               let pet = petsArray[i];
               if (popupName === pet.name) {
                document.getElementById("popup-content").innerHTML = `
                <div class="popup-img"><img class="popup-img" src="${pet.img}" alt="${pet.name}"></div>
                <div class="popup-info">
                <div class="popup-title">${pet.name}</div>
                <div class="pet-breed">${pet.type} - ${pet.breed}</div>
                <div class="pet-description">${pet.description}</div>
                <ul class="pet-other">
                <li><strong>Age:</strong> ${pet.age}</li>
                <li><strong>Inoculations:</strong> ${pet.inoculations.join(', ')}</li>
                <li><strong>Diseases:</strong> ${pet.diseases.join(', ')}</li>
                <li><strong>Parasites:</strong> ${pet.parasites.join(', ')}</li>
                </ul>
                </div>
                `;
               };
            };
            
            popupOpen(currentPopup); // открытие нужного попапа
           
        });
    };
}; 

// to close popup

function popupClosed() {
    document.getElementById('popup').classList.remove('open');
    popupDark.classList.remove('open');
    document.body.classList.remove('stop-scroll');
    document.getElementById("popup-content").innerHTML = ``;
};

popupCloseIcon.addEventListener('click', popupClosed);

// onclick on the darken part
//const blackout = document.getElementById('popup');

popupDark.addEventListener('click', () => {
    if (blackout.classList.contains('open')) {
        popupClosed();           
    };
});

function popupOpen(currentPopup) {
   currentPopup.classList.add('open');
   popupDark.classList.add('open');
   document.body.classList.add('stop-scroll');

};

