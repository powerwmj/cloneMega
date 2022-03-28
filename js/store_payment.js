// store_payment

let selectCard =  function(){
 let langSelect = document.getElementById("card_select");
 let selectValue = langSelect.options[langSelect.selectedIndex].value;
    console.log(selectValue);
    if( selectValue != '00'){
        app_card.classList.add('off');
        lab_app_card.classList.add('off');
        general_card.classList.add('off');
        lab_general_card.classList.add('off');

    }else{
        app_card.classList.remove('off');
        lab_app_card.classList.remove('off');
        general_card.classList.remove('off');
        lab_general_card.classList.remove('off');  }


};

//결제수단 선택
const elPaySel = document.querySelectorAll('input[name="radio_choice"]');
const selKakao = document.querySelector('.select-kakao-info');
const selPayco = document.querySelector('.select-payco-info');

elPaySel.forEach(function(v,k){
    v.onclick=function(){
        if(v.value =='credit' ){
            selpaymentcard.style.display = "block";
            selKakao.style.display="none";
            selPayco.style.display="none";
            terms.style.display="none";

        }else if(v.value =='kakaopay'){
            selpaymentcard.style.display = "none";
            selKakao.style.display="block";
            selPayco.style.display="none";
            terms.style.display="block";

        }else if(v.value =='payco'){

            selpaymentcard.style.display = "none";
            selKakao.style.display="none";
            selPayco.style.display="block";
            terms.style.display="block";

        }
        
    }

})

        
    
    


//결제대행 액션



