// Adding comments for Firestore
// https://velog.io/@chchaeun/Firebase%EC%99%80-Javascript%EB%A1%9C-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B0

import { db } from "./firebase_init.js"
import { collection, query, orderBy, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// comment가 제출됐을 때 호출되는 비동기 처리 함수
const onSubmit = async (e) => {
    // html에서 form 정보 불러오기
    const c_input = document.querySelector("#comment_input");
    const u_input = document.querySelector("#user_input");
    const robot_check = document.querySelector("#robot_check")

    // 새로고침 방지
    e.preventDefault();

    // 비어있는 필드가 있으면 중단
    if (u_input.value == "" || c_input.value == "") {
        alert('작성자 또는 내용이 비어있으면 작성할 수 없습니다.');
        return
    }
    // 로봇이면 중단 (로봇은 무조건 체크하는 것으로 가정)
    if (robot_check.checked === true) {
        alert('죄송합니다. 로봇은 초대한 적이 없습니다.');
        return
    }

    // 현재 시각 가져오기
    const createdAt = new Date();

    try {
        const docRef = await addDoc(collection(db, "comments"), {
            "created": createdAt,
            "modified": createdAt, // 생성시각과 동일하게
            "userName": u_input.value,
            "comment": c_input.value,    
        });
        console.log("Document written with ID: ", docRef.id);

        // 입력값 비우기
        u_input.value = "";
        c_input.value = "";
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// todo form에 submit을 감지하는 이벤트리스너를 추가한다.
// submit되면 onSubmit 함수가 호출된다.
const c_submit = document.querySelector("#comment_submit");
c_submit.addEventListener("submit", onSubmit);


// Get a list of comments
async function getComments(db) {
    const commentsCol = collection(db, "comments");
    const commentsSnapshot = await getDocs(commentsCol);

    // commentsSnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });
  
    const commentsList = commentsSnapshot.docs.map(doc => doc.data());
    return commentsList;  
}


// Firestore 데이터 변경이 실시간으로 감지되면 실행
onSnapshot(
    query(collection(db, "comments"), orderBy("created")), 
    (snapshot) => {
    // map 함수는 배열의 요소들을 하나하나 돌면서 코드를 실행한다.
    // snapshot.docs.map은 documents를 배열로 받아온 것
    // todoArr에 문서의 데이터들과 id를 저장한다.
    let commentsArr = [];
    commentsArr = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    }));

    // snapshot.forEach((doc) => {
    //     commentsArr.push(doc.data().comment);
    // });
    // console.log("Current cities in CA: ", commentsArr.join(", "));  
    // console.log(commentsArr)

    // 변경사항이 있으면 자동으로 리스트 반영하기
    refreshComments(commentsArr);
});


// 댓글 리스트를 갱신한다.
const refreshComments = (commentsArr) => {
    const currentList = document.querySelector("#comment_list");
    if (currentList) {
        currentList.innerHTML = "";
    }
  
    const div_parent = document.createElement("div");
  
    // map 함수를 이용해서 todoArr의 모든 요소를 반복해서 가져온다.
    commentsArr.map((t) => {
        // li(ul 안에 들어가는 리스트 요소) 생성
        const div_child = document.createElement("div");

        // li 태그의 안에는 todo의 내용이 들어간다.
        const h_user = document.createElement("h5");
        const p_comment = document.createElement("p");
        h_user.innerText = `${t.userName}`;
        h_user.classList.add("m-3");
        p_comment.innerText = `${t.comment}`;
        p_comment.classList.add("m-3");
        p_comment.classList.add("mb-5");

        div_child.appendChild(h_user);
        div_child.appendChild(p_comment);  
        div_parent.appendChild(div_child);  
    });
  
    if (commentsArr.length > 0) {
        currentList.appendChild(div_parent);
    }
  };