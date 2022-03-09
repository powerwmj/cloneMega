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
        // console.log(data)
        console.log('a')
    ))
    .catch((err) => console.log(err));
}

// 영화 진흥원 API
let date = '20220302';
fetch (`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=cb159847ce3eaae2e2d1f0b434c70fff&targetDt=${date}`)
.then((response) => response.json())
.then(data => {
    let title = [];
    for(let v of data.boxOfficeResult.dailyBoxOfficeList){
        title.push(v);
    }
    // console.log(title)
    // return(title);
    return imgUrl(title[0].movieNm);
})
.catch((err) => console.log(err));



