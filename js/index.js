// // 영화 정보
// let movieDB = [];
// let title = [];
// let posterURL = [];

// // 메인 베너 삽입
// const elBoxlist = document.querySelectorAll('.box-list figure');
// const elPoster = document.querySelectorAll('.box-list figure>img');
// const elRating = document.querySelectorAll('.box-list figure span');

// // console.log(elPoster)
// let elFigure = '';
// let resting = '<img src="./img/main/grade_white_24dp.svg" alt="star"></img>';

// let DB = async function(){
//     // 네이버 영화 검색 API
//     let imgUrl = function (Nm, i){
//         // 프록시우회 https://cors-anywhere.herokuapp.com/
//         let search = Nm;
//         fetch (`https://openapi.naver.com/v1/search/movie.json?query=${search}&display=1`,{
//             method: "GET",
//             headers: {
//                 "X-Naver-Client-Id": "zCe1y3Xuohsh1dHy9sB8",
//                 "X-Naver-Client-Secret": "cvc3ysfCyR"
//             }})
//         .then((response) => response.json())
//         .then((data) =>{
//             elPoster[i].src = data.items[0].image;   
//             elRating[i].innerHTML = resting+data.items[0].userRating;            

//             console.log(data)
//         })
//         .catch((err) => console.log(err));
//     }

//     // 영화 진흥원 API
//     function date(){
//         // 검색 날짜 설정
//         let monthNm = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
//         let year = new Date().getFullYear().toString();
//         let month = monthNm[new Date().getMonth()];
//         let date = new Date().getDate().toString();
        
//         let today = year+month+date-1 // 당일 조회 안됨

//         return today;
//     }
//     await fetch (`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=cb159847ce3eaae2e2d1f0b434c70fff&targetDt=${date()}`)
//     .then((response) => response.json())
//     .then((data) => {
//         for(let v of data.boxOfficeResult.dailyBoxOfficeList){
//             movieDB.push(v);
//             title.push(v.movieNm);
//         }
//         imgUrl(title[1])
//         for(let i=0; i<4; i++){
//             imgUrl(title[i], i);
//         }
//     })
//     .catch((err) => console.log(err));
// }
// DB();

const elBoking = document.querySelectorAll('.box-list figure p button');
elBoking.forEach(function(v){
    v.onclick=function(){
        location.href='./sub_reservation.html';
    }
})