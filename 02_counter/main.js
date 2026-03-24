let count = 0;
//Html -> JS
// const h1 = document.querySelector('h1');
// const plus = document.querySelector('#Pul');
// //숫자 증가하자
// plus.addEventListener('click', function() {
//     // h1의 텍스트를 숫자로 변환하여 1 증가시키기
//     // // 숫자 표시하기
//     h1.textContent = Number(h1.textContent) + 1;
// });


// const resultH1 = document.querySelectorAll('h1')[0];
//[0] -> 0번째 요소
// const resultH1 = document.getElementsByTagName('h1')[0];
// //getElementsByTagName('h1')[0]; : h1 태그를 모두 가져와서 그 중 첫 번째 요소를 선택하는 방법
// const plusButton = document.getElementsByTagName('button')[0];

// plusButton.addEventListener('click', 처리함수);

// function 처리함수() {


// count++;
// resultH1.innerHTML = count;

// }

// plusButton.addEventListener('click', function() {
//     count++;
//     resultH1.innerHTML = count;
// });

const resultH1 = document.querySelector('h1');

const plusButton = document.querySelector('#Pul');

plusButton.onclick = () => {
    count++;
    resultH1.innerHTML = count;
};