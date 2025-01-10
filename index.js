






// function mainfun(maindata){

// fetch('https://fakestoreapi.com/products',{ cache: 'force-cache' })
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('itemcat');
    
    
  
    
//     const result = data.slice(12,18).map((item) => `
//       <div class="flex-none min-w-[150px] flex items-center flex-col gap-2 p-2">
//         <div class="p-3">
//           <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-contain">
//         </div>
//         <div class="flex gap-2 items-center hover:cursor-pointer group py-2 px-3">
//           <p class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] font-semibold">${item.title}</p>
//           <svg xmlns="http://www.w3.org/2000/svg"
//                class="h-4 w-4 group-hover:rotate-180 transition-transform" 
//                fill="none" 
//                viewBox="0 0 24 24"
//                stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//     `).join('');

//     container.innerHTML = result;
//   })
//   .catch(error => console.error('Error fetching API:', error));










  document.addEventListener('DOMContentLoaded', () => {
    let productsData = [];
    const searchInput = document.getElementById('search');
    const searchResultsContainer = document.getElementById('searchResults');

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' });
            productsData = await response.json();
            renderAllSections(productsData);
        } catch (error) {
            console.error('Error fetching API:', error);
        }
    };

    const renderSection = (containerId, dataSlice) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const content = dataSlice.map((item) => `
            <div class="flex items-center justify-between flex-col border border-gray-400 px-5 py-5 rounded-md">
                <div class="flex items-center justify-center">
                    <img src="${item.image}" alt="" class="w-24 h-24">
                </div>
                <div class="flex flex-col justify-between gap-2 items-center">
                    <div class="flex items-center justify-center">
                        <p class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]">${item.title}</p>
                    </div>
                    <div>
                        <p class="font-semibold">From ₹ ${item.price}</p>
                    </div>
                </div>
            </div>
        `).join('');

        container.innerHTML = content;
    };

    const renderAllSections = (data) => {
        renderSection('prodleft', data.slice(8, 16));
        renderSection('beautyfoods', data.slice(6, 13));
        renderSection('quality', data.slice(14, 18));
        renderSection('winteress', data.slice(1, 5));
        renderSection('homedecor', data.slice(12, 16));
        renderSection('newyear', data.slice(14, 18));
        renderSection('handpicked', data.slice(14, 18));
        renderSection('toprated', data.slice(2, 6));
        renderSection('likethings', data.slice(9, 13));
        renderSection('furniture', data.slice(1, 7));
        renderSection('fashion', data.slice(6, 12));
        renderSection('Grooming', data.slice(6, 12));
    };

   
    const searchProducts = () => {
        const query = searchInput.value.toLowerCase().trim();
        
   
        if (query === '') {
            if (searchResultsContainer) {
                searchResultsContainer.style.display = 'none';
            }
            renderAllSections(productsData);
            return;
        }

 
        const filteredProducts = productsData.filter(item => 
            item.title.toLowerCase().includes(query)
        );

   
        if (searchResultsContainer) {
            searchResultsContainer.style.display = 'grid';
            renderSection('searchResults', filteredProducts);
        }
    };

  
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }

    fetchData();
});








//carousel
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('bg-gray-800', i === index);
    indicator.classList.toggle('bg-gray-400', i !== index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 2000); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.getElementById('prevBtn').addEventListener('click', () => {
  stopAutoSlide();
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
  startAutoSlide();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  stopAutoSlide();
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  startAutoSlide();
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
    stopAutoSlide();
    currentIndex = parseInt(e.target.dataset.index);
    showSlide(currentIndex);
    startAutoSlide();
  });
});


showSlide(currentIndex);
startAutoSlide();








