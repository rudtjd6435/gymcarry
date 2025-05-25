  const emoji = document.getElementById("emoji-cursor");

  document.addEventListener("mousemove", (e) => {
    emoji.style.left = e.clientX + "px";
    emoji.style.top = e.clientY + "px";
  });


// 모달 열기 함수
function openModal(equipment) {
    document.getElementById(equipment + '-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal(equipment) {
    document.getElementById(equipment + '-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 기구 필터링 함수
function filterEquipment(category) {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    const cards = document.querySelectorAll('.equipment-card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategory = card.getAttribute('data-category');
            card.style.display = cardCategory === category ? 'block' : 'none';
        }
    });
}

// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 환경에서의 추가 기능을 여기에 구현할 수 있습니다.
    if (window.innerWidth <= 768) {
        // 모바일 환경에서의 특별한 처리가 필요한 경우
        console.log('모바일 환경입니다.');
    }
}); 
