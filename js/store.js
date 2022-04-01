fetch('js/store.json')
.then((data) => data.json())
.then((data) => {
    const elUl1 = document.querySelector('.store-list.ticket ul');
    const elUl2 = document.querySelector('.store-list.goods ul');
    const elUl3 = document.querySelector('.store-list.point ul');
    const ulP = document.querySelectorAll('.store-list');
    let elTxt = ' ', elGoods=' ', elPoint='';
    
    data.store.forEach(function(v,k){
        let idx = this.index;
        //console.log(data.store[k].title)
        if(v.category === 'ticket'){
            elTxt += ` 
        <li>
            <a href="store_view.html" class="list-link" title="${data.store[k].title}">
                <div class="label event">EVENT</div>
                <div class="img"><img src="${data.store[k].thumb}" alt="${data.store[k].title}"></div>
                <div class="info">
                    <div class="tit">
                        <p class="name">${data.store[k].title}</p>
                        <p class="bundle">${data.store[k].summary}</p>
                    </div>
                    <div class="price">
                        <p class="original">${data.store[k].price_org}원</p>
                        <p class="sale">
                            <em>${data.store[k].price_sale}</em>
                            <span>원</span>
                        </p>
                        <p class="ea">
                            <span>${data.store[k].count}</span>개 남음
                        </p>
                    </div>
                </div>
            </a>
        </li>
            `;
        } 
        if(v.category === 'goods'){
            elGoods += ` 
        <li>
            <a href="store_view.html" class="list-link" title="${data.store[k].title}">
                <div class="label event">EVENT</div>
                <div class="img"><img src="${data.store[k].thumb}" alt="${data.store[k].title}"></div>
                <div class="info">
                    <div class="tit">
                        <p class="name">${data.store[k].title}</p>
                        <p class="bundle">${data.store[k].summary}</p>
                    </div>
                    <div class="price">
                        <p class="original">${data.store[k].price_org}원</p>
                        <p class="sale">
                            <em>${data.store[k].price_sale}</em>
                            <span>원</span>
                        </p>
                        <p class="ea">
                            <span>${data.store[k].count}</span>개 남음
                        </p>
                    </div>
                </div>
            </a>
        </li>
            `;
        }
        if(v.category === 'point'){
            elPoint += ` 
        <li>
            <a href="store_view.html" class="list-link" title="${data.store[k].title}">
                <div class="label event">EVENT</div>
                <div class="img"><img src="${data.store[k].thumb}" alt="${data.store[k].title}"></div>
                <div class="info">
                    <div class="tit">
                        <p class="name">${data.store[k].title}</p>
                        <p class="bundle">${data.store[k].summary}</p>
                    </div>
                    <div class="price">
                        <p class="original">${data.store[k].price_org}원</p>
                        <p class="sale">
                            <em>${data.store[k].price_sale}</em>
                            <span>원</span>
                        </p>
                        <p class="ea">
                            <span>${data.store[k].count}</span>개 남음
                        </p>
                    </div>
                </div>
            </a>
        </li>
            `;
        }
        
    });
    elUl1.innerHTML = elTxt;
    elUl2.innerHTML = elGoods;
    elUl3.innerHTML = elPoint;

    let elLi = document.querySelectorAll('.tab ul li');
    let elBest = document.querySelector('.best');
    let elTit = document.querySelectorAll('.goods-tit');
    elLi.forEach(function(v,k) {
        
        v.addEventListener('click', function(event) {
            elLi[0].classList.remove('on');
            elLi[1].classList.remove('on');
            elLi[2].classList.remove('on');
            elLi[3].classList.remove('on');
            elLi[k].classList.add('on');
            if( k === 0 ){
                console.log(0)
                elBest.classList.remove('none');
                elTit[0].classList.remove('none');
                elTit[1].classList.remove('none');
                elTit[2].classList.remove('none');
                ulP[0].classList.remove('none');
                ulP[1].classList.remove('none');
                ulP[2].classList.remove('none');
            }
            if( k === 1 ){
                console.log(1)
                elBest.classList.add('none');
                elTit[0].classList.add('none');
                elTit[1].classList.add('none');
                elTit[2].classList.add('none');
                ulP[0].classList.remove('none');
                ulP[1].classList.add('none');
                ulP[2].classList.add('none');
            }
            if( k === 2 ){
                console.log(2)
                elBest.classList.add('none');
                elTit[0].classList.add('none');
                elTit[1].classList.add('none');
                elTit[2].classList.add('none');
                ulP[0].classList.add('none');
                ulP[1].classList.remove('none');
                ulP[2].classList.add('none');
            }
            if( k === 3 ){
                console.log(3)
                elBest.classList.add('none');
                elTit[0].classList.add('none');
                elTit[1].classList.add('none');
                elTit[2].classList.add('none');
                ulP[0].classList.add('none');
                ulP[1].classList.add('none');
                ulP[2].classList.remove('none');
            }
        });
        
    });
    
    
})