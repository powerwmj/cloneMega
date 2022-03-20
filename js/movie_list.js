const elBtn_more = document.querySelector('main .show_img')
const elBtn_close = document.querySelector('main .load_more_box')
const elFilter_open = document.querySelector('main .filter_btn input')




let exChange = function(){
    $.ajax({
    url:'js/movie_list.json',
    success:function(data){
        let item = '';
        let elUp_li;
     
        let more = function(n,m){
            $.each(data.data,function(key,v){
                if(key >= n && key < m ){
                    item =`
                    <li tabindex="0" class="no-img ${v.play}" >
                    <div class="movie-list-info">
                        <p class="rank">${v.rank}<span class="ir">위</span></p>
                            <img src="${v.image}" alt="${v.movieNm}" class="poster lozad" onerror="noImg(this)">
                                <div class="curation">
                                    <p class="film" style="display: none">필름 소사이어티</p>
                                    <p class="classic" style="display: none">클래식 소사이어티</p>
                                </div>

                        <div class="screen-type2">
                            <p name="dbcScrean" ${v.none}><img src="./img/movie/dolby.png" alt="dolby"></p>
                            <p name="mxScreen"${v.mxnone} ><img src="./img/movie/mx.png" alt="mx"></p>
                        </div>
                    
                        <div class="movie-score">
                            <a href="#" class="wrap movieBtn" data-no="21089100" title="${v.movieNm} 상세보기">
                                <div class="summary">
                                ${v.story}
                                </div>

                                <div class="my-score big">
                                    <div class="preview">
                                        <p class="tit_sub">관람평</p>
                                        <p class="number">${v.recommend}<span class="ir">점</span></p>
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>

                        <div class="tit-area">
                            <p class="movie-grade ${v.age}">,</p>
                                <p title=${v.movieNm} class="tit">${v.movieNm}</p>
                        </div>

                        <div class="rate-date">
                            <span class="rate">예매율 ${v.salesShare}%</span>
                            <span class="date">개봉일 ${v.openDt}</span>
                        </div>
                        
                        <div class="btn-util">

                            <button type="button" class="button btn-like" data-no="21089100">
                                <i title="보고싶어 안함" class="iconset ico-heart-toggle-gray intrstType"></i> <span>${v.like}</span>
                            </button>

                            <div class="case col-2 movieStat3" style="display: none">
                                <a href="#" class="button purple bokdBtn" data-no="21089100" title="영화 예매하기">예매</a>
                                <a href="#" class="button purple img splBtn" data-no="21089100">
                                    <img src="./img/movie/dolbyBtn.png" alt="dolby 버튼">
                                </a>
                            </div>
                                
                            <div class="case movieStat4">
                                <a href="#" class="button purple bokdBtn" data-no="21089100" title="영화 예매하기">예매</a>
                            </div>

                        </div>
                </li>
                    `    
                }else{item='';}
                $('.movie-list ul').append(item);
                
            })

            elUp_li = document.querySelectorAll('main .movie-list li')
            elli_target = document.querySelectorAll('main .movie-list .play')
            window.addEventListener('scroll',view)

            let num = 0;
            elFilter_open.onclick = function(){
                if(num%2==0){
                    elli_target.forEach(function(p){
                        p.classList.add('bye')
                })
                }
                else{
                    elli_target.forEach(function(p){
                        p.classList.remove('bye')
                })
                }
                num++;
            }

        }

        function view(){
            elUp_li.forEach(function(p){
        })
}


        more(0,12, 'all');

        window.scrollTo(0,1);

            let num = 1;
            let ea = 12;
   
            elBtn_more.onclick =function(){
                num++;
                more(num*ea - 12, num * ea);
                view();
            
                if(num >= 4){
                    elBtn_close.classList.add('active')
                }
            }




            
        }
    });
}
exChange();

const elFilter_span = document.querySelector('main .filter_btn')

let typeChange = function(spanType){
    $.ajax({
    url:'js/movie_list.json',
        success:function(data){
            let dataLi = '';
            let elUp_li;

            $.each(data.data,function(key,v){
                
                if(v.type == spanType){
                        dataLi +=
                        `
                    <li tabindex="0" class="no-img" >
                    <div class="movie-list-info">
                        <p class="rank">${v.rank}<span class="ir">위</span></p>
                            <img src="${v.image}" alt="${v.movieNm}" class="poster lozad" onerror="noImg(this)">
                                <div class="curation">
                                    <p class="film" style="display: none">필름 소사이어티</p>
                                    <p class="classic" style="display: none">클래식 소사이어티</p>
                                </div>

                        <div class="screen-type2">
                            <p name="dbcScrean" ${v.none}><img src="./img/movie/dolby.png" alt="dolby"></p>
                            <p name="mxScreen"${v.mxnone} ><img src="./img/movie/mx.png" alt="mx"></p>
                        </div>
                    
                        <div class="movie-score">
                            <a href="#" class="wrap movieBtn" data-no="21089100" title="${v.movieNm} 상세보기">
                                <div class="summary">
                                ${v.story}
                                </div>

                                <div class="my-score big">
                                    <div class="preview">
                                        <p class="tit_sub">관람평</p>
                                        <p class="number">${v.recommend}<span class="ir">점</span></p>
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>

                        <div class="tit-area">
                            <p class="movie-grade ${v.age}">,</p>
                                <p title=${v.movieNm} class="tit">${v.movieNm}</p>
                        </div>

                        <div class="rate-date">
                            <span class="rate">예매율 ${v.salesShare}%</span>
                            <span class="date">개봉일 ${v.openDt}</span>
                        </div>
                        
                        <div class="btn-util">

                            <button type="button" class="button btn-like" data-no="21089100">
                                <i title="보고싶어 안함" class="iconset ico-heart-toggle-gray intrstType"></i> <span>${v.like}</span>
                            </button>

                            <div class="case col-2 movieStat3" style="display: none">
                                <a href="#" class="button purple bokdBtn" data-no="21089100" title="영화 예매하기">예매</a>
                                <a href="#" class="button purple img splBtn" data-no="21089100">
                                    <img src="./img/movie/dolbyBtn.png" alt="dolby 버튼">
                                </a>
                            </div>
                                
                            <div class="case movieStat4">
                                <a href="#" class="button purple bokdBtn" data-no="21089100" title="영화 예매하기">예매</a>
                            </div>

                        </div>
                </li>
                    `    
                    $('.movie_list ul').html(dataLi);
                }
            });
            elUp_li = document.querySelectorAll('main .movie_list li')
                
        }
    });

};
elFilter_span.onclick = function(){
    typeChange( $(this).text().trim() );
}

