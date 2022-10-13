let url = 'https://deckofcardsapi.com/api/deck';

// $.getJSON(`${url}/new/draw/`)
//     .then(res => {
//         let { suit, value } = res.cards[0];
//         console.log(`${value} of ${suit}`);
//   });

  
// $.getJSON(`${url}/new/draw/`)
//     .then(res => {
//         firstCard = res.cards[0];
//         deckId = res.deck_id;
//         return $.getJSON(`${url}/${deckId}/draw/`);
//     })
//     .then(res => {
//         secondCard = res.cards[0];
//         [firstCard, secondCard].forEach(function(card) {
//             console.log(`${card.value} of ${card.suit}`);
//         });
//     });


let $btn = $('#button');
let $cardArea = $('#card-area');
  
$.getJSON(`${url}/new/shuffle/`).then(res => {
    deckId = res.deck_id;
    });
  
$btn.on('click', function() {
    $.getJSON(`${url}/${deckId}/draw/`).then(res => {
        let cardImg= res.cards[0].image;
        $cardArea.append(
          $('<img>', {
            src: cardImg
          })
        );
        if (res.remaining === 0) $btn.remove();
    });
});


