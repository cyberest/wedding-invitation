// 이미지 링크 리스트
const galleryLink = "https://firebasestorage.googleapis.com/v0/b/invitation-221015.appspot.com/o/images%2Fgallery%2F__FILENAME__?alt=media";
let imageArr = [
    ["겨울 아침, 따뜻한 난로 앞에서", "f08.jpg"], // 7
    ["직접 키운 채소로 만든 소풍 도시락", "f01.jpg"], // 1
    ["우리집 채소 만두 장인", "f02.jpg"], // 2
    ["텃밭에서 먹는 새참", "f03.jpg"], // 3
    ["봄향기 가득한 한 끼", "f04.jpg"], // 4
    ["우리의 따뜻한 겨울나기", "f05.jpg"], // 5
    ["배가 고픈 강아지 민들레", "f06.jpg"], // 6

    ["행복의 조건: 한 권의 책과 당신", "h01.JPG"], // 8
    // ["아침 햇살, 푸릇한 식물 그리고 당신", "h02.jpg"], // 9
    // ["지상의 양식", "h03.jpg"], // 10
    ["청설모 들썩이와 주말 나들이", "h04.jpg"], // 11
    ["우리가 돌본 첫번째 강아지 곰이", "h08.jpg"], // 21
    // ["뭉치", "h05.jpg"], // 12
    ["할아버지 승차감은 괜찮으세요?", "h06.jpg"], // 13
    // ["텃밭에서의 하루", "h07.JPG"], // 20
    ["조금 특별한 가족, 달팽이", "h09.jpeg"], // 22
    ["우리가 직접 기른 지상의 양식", "h10.png"], // 23
    ["3년 전 제주에서 프로포즈 받은 날", "h11.jpg"], // 24
    ["Helen, 자연과 조화를 이루는 삶", "h12.jpg"], // 25

    ["모두가 함께한 가족사진", "u01.JPEG"], // 14
    ["강아지 뭉치와 한해 농사 마무리", "u02.jpg"], // 15
    ["평화로운 주말, 한강공원에서", "u03.jpg"], // 16
    ["2년 전, 둘만의 결혼사진", "u04.jpg"], // 17
    // ["우리의 첫번째 결혼식 (1)", "u05.jpg"], // 18
    ["우리의 새출발", "u06.png"], // 19
];

// 갤러리에 이미지를 추가한다.
const currentList = document.querySelector("#gallery");
if (currentList) {
    currentList.innerHTML = "";
}

// map 함수를 이용해서 todoArr의 모든 요소를 반복해서 가져온다.
imageArr.map((t) => {

    const div_grand_parent = document.createElement("div");
    div_grand_parent.classList.add("col-lg-6");
    div_grand_parent.classList.add("portfolio-item");
    
    // li(ul 안에 들어가는 리스트 요소) 생성
    const div_parent = document.createElement("div");
    div_parent.classList.add("caption");

    const div_child = document.createElement("div");
    div_child.classList.add("caption-content");

    const div_caption = document.createElement("div");
    div_caption.classList.add("text-faded");
    div_caption.classList.add("mb-0");

    // const em_tag = document.createElement("em");
    // em_tag.innerHTML = `${t[0]}`;
    div_caption.innerHTML = `&nbsp;${t[0]}&nbsp;`;

    const img_tag = document.createElement("img");
    img_tag.classList.add("img-fluid");
    img_tag.src = galleryLink.replace("__FILENAME__", `${t[1]}`);
    // console.log(galleryLink.replace("__FILENAME__", `${t[1]}`));

    // div_caption.appendChild(em_tag);
    div_child.appendChild(div_caption);
    div_parent.appendChild(div_child);
    div_grand_parent.appendChild(div_parent);
    div_grand_parent.appendChild(img_tag);

    currentList.appendChild(div_grand_parent);
});