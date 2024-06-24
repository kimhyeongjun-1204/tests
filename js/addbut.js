const result = document.querySelector('.result');
const modal = document.querySelector('#modal');
const loading = document.querySelector('.result_loading');
const startButton = document.querySelector('.start_btn');
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const shareButton = document.querySelector('.share_btn');

// 사용자의 입력을 받아 띄워주는 함수 
function caculator() {
    // 사용자 입력을 받음
    console.log('Button was clicked!'); 
    const fieldValue = document.querySelector('#field_value');
    let timeValue = document.querySelector('#time_value');  
    let timeValue_int = Number(timeValue.value) // 문자 => 숫자로 변환 

    //처리 결과를 띄워줌 
    const fieldResult = document.querySelector('.field_result');
    const timeResult = document.querySelector('.time_result');
    
    if ((fieldValue.value) == '') {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if ((timeValue.value) == '') {
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = 'none'; // 결과 값 대기 
    loading.style.display = 'flex'; // 로딩중 띄우기 
    
    // 1.8초 뒤에 함수가 실행됨 
    setTimeout(function () {
        loading.style.display = 'none';
        result.style.display = 'flex';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000 / timeValue_int), 10) /* 10진수로 정수 변환 */
    }, 1800);

}

// 모달 창 띄움 
function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}


startButton.addEventListener('click', caculator); 
openButton.addEventListener('click', openModal); 
closeButton.addEventListner('click', closeModal);






















const but = document.querySelector('.but'); 
function butt() {
    alert('button'); 
}
but.addEventListener('click', butt); 
