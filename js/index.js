let movieDB = [];
let title = [];
let posterURL = [];

// 네이버 영화 검색 API
function imgUrl(Nm){
    // 프록시우회 https://cors-anywhere.herokuapp.com/
    let search = Nm;
    fetch (`https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?query=${search}&display=1`,{
        method: "GET",
        headers: {
            "X-Naver-Client-Id": "zCe1y3Xuohsh1dHy9sB8",
            "X-Naver-Client-Secret": "cvc3ysfCyR"
        }})
    .then((response) => response.json())
    .then((data) => (
        console.log(data.items[0])

    ))
    .catch((err) => console.log(err));
}

// 영화 진흥원 API
function date(){
    // 검색 날짜 설정
    let monthNm = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let year = new Date().getFullYear().toString();
    let month = monthNm[new Date().getMonth()];
    let date = new Date().getDate().toString();
    
    let today = year+month+date-1 // 당일 조회 안됨

    return today;
}
fetch (`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=cb159847ce3eaae2e2d1f0b434c70fff&targetDt=${date()}`)
.then((response) => response.json())
.then(data => {

    for(let v of data.boxOfficeResult.dailyBoxOfficeList){
        movieDB.push(v);
        title.push(v.movieNm);
    }
})
.catch((err) => console.log(err));

// 메인 베너 삽입
const elBoxlist = document.querySelector('.box-list');
let elFigure = [];

for(let i=0; i<4; i++){
    elBoxlist.innerHTML +=(`<figure>
                        <img src="./img/main/test.jpeg" alt="">
                        <figcaption>
                            <i>${i+1}</i>
                            <img src="./img/main/bg-main-movie-rank.png"/>
                        </figcaption>
                        <p>
                            <span><img src="./img/main/grade_white_24dp.svg" alt="star">4.5</span>
                            <button>예매</button>
                        </p>
                    </figure>`);
}

const elBoking = document.querySelectorAll('.box-list figure p button');
elBoking.forEach(function(v){
    v.onclick=function(){
        location.href='./sub_reservation.html';
    }
})