let favNumber = 4;
let BASE_URL = "http://numbersapi.com";

// 1.
async function p1() {
  let data = await $.getJSON(`${BASE_URL}/${favNumber}?json`);
  console.log(data);
}
p1();

// 2.
const favNumbers = [4, 23, 39];
async function p2() {
  let data = await $.getJSON(`${BASE_URL}/${favNumbers}?json`);
  console.log(data);
}
p2();

// 3.
async function p3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${BASE_URL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
p3();