const loadData = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const dataConvert = await res.json();
    const data = dataConvert.data;
    showPhone(data);
}

const showPhone = (phones)=>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    const showAllBtn = document.getElementById('show-all');
    if(phones.length > 12){
        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList= `text-center p-6 border-2 rounded-xl`;
        phoneCard.innerHTML=`
                    <div class="p-12 bg-[#0D6EFD0D] rounded-2xl">
                        <img class="mx-auto" src="${phone.image}" alt="">
                    </div>
                    <div class="pt-6">
                        <h2 class="text-2xl text-[#403F3F] font-bold pb-5">${phone.phone_name}</h2>
                        <p class="pb-2 text-base font-[#706F6F]">There are many variations of passages of available, but
                            the majority have suffered</p>
                        <h4 class="text-2xl text-[#403F3F] font-bold pb-4">$999</h4>
                        <button onclick="my_modal_3.showModal()" class="btn bg-[#0D6EFD] text-white hover:bg-[#0D6EFD]">Show Details</button>
                    </div>
                    `
        cardContainer.appendChild(phoneCard);
    });
    loadingHandler(false);
}
const inputValue = () =>{
    loadingHandler(true);
    const inputText = document.getElementById('input-area');
    const inputValue = inputText.value;
    loadData(inputValue);

}
const searchBtn = () =>{
    inputValue()
}
const loadingHandler = (isLoading) =>{
    const loadingContainer = document.getElementById('loading');
    if(isLoading){
        loadingContainer.classList.remove('hidden')
    }
    else{
        loadingContainer.classList.add('hidden')
    }
}
const getDetails = async () =>{
    const phoneDetails = await fetch(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`);
    const convertData = await phoneDetails.json();
    const allData = convertData.data;
}
loadData()