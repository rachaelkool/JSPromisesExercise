let url = 'http://numbersapi.com';

// // $.getJSON(`${url}/24?json`).then(res => {
// //     console.log(res.text);
// //   });


// // let nums = [1, 4, 78];

// // $.getJSON(`${url}/${nums}?json`).then(res => {
// //     console.log(res)
// // });


function fact(url1) {
    $.getJSON(`${url1}/24?json`).then(data => {
        $('body').append(`<p>${data.text}</p>`)
    })
}

fact(url)
fact(url)
fact(url)
fact(url)



