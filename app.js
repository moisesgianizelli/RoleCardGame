document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'cassin',
      img: 'images/cassin.jpg',
    },
    {
      name: 'cassin',
      img: 'images/cassin.jpg',
    },
    {
      name: 'kruger',
      img: 'images/kruger.jpg',
    },
    {
      name: 'kruger',
      img: 'images/kruger.jpg',
    },
    {
      name: 'tang',
      img: 'images/tang.jpg',
    },
    {
      name: 'tang',
      img: 'images/tang.jpg',
    },
    {
      name: 'xuan',
      img: 'images/xuan.jpg',
    },
    {
      name: 'xuan',
      img: 'images/xuan.jpg',
    },
    {
      name: 'kiss',
      img: 'images/kiss.jpg',
    },
    {
      name: 'kiss',
      img: 'images/kiss.jpg',
    },
    {
      name: 'moisa',
      img: 'images/moisa.jpg',
    },
    {
      name: 'moisa',
      img: 'images/moisa.jpg',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/card1.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }
  // chck for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/space.jpg');
      cards[optionTwoId].setAttribute('src', 'images/space.jpg');
      alert('Ai q burro');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('OPA');
      cards[optionOneId].setAttribute('src', 'images/space.jpg');
      cards[optionTwoId].setAttribute('src', 'images/space.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/card1.jpg');
      cards[optionTwoId].setAttribute('src', 'images/card1.jpg');
      alert('ERRRRRROU');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'DEU BOA';
    }
  }

  //flip cards
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
