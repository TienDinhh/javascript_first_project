const Elementparent = document.querySelectorAll(".parent");
console.log("slide");
const data = [
  {
    name: "Europe",
    package: "3",
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
  },
  {
    name: "Oia's Sunset",
    package: "3",
    img: "img/Beautiful_Oia_Sunset_.jpg",
  },
  {
    name: "China",
    package: "3",
    img: "img/village-1672547823032930944539.jpg",
  },
  {
    name: "Italy",
    package: "3",
    img: "img/langman.jpg",
  },
  {
    name: "ThaiLand",
    package: "3",
    img: "img/thailan.jpg",
  },
  {
    name: "Viet Nam",
    package: "3",
    img: "img/VietNam.jpg",
  },
];
const renderHtml = [];
Elementparent.forEach((e) => {
  e.addEventListener("mouseover", () => {
    if (e.querySelector(".children")) {
      e.querySelector(".children").classList.remove("opacity-0");
    }
  });
  e.addEventListener("mouseleave", () => {
    if (e.querySelector(".children")) {
      e.querySelector(".children").classList.add("opacity-0");
    }
  });
});

document.querySelector(".close").addEventListener("click", () => {
  if (document.querySelector(".bg-nenn")) {
    document.querySelector(".bg-nenn").classList.add("hidden");
    document.querySelector("nav").classList.add("left-[-100%]");
    document.querySelector("nav").classList.remove("left-0");
  }
});
document.querySelector(".menu").addEventListener("click", () => {
  if (document.querySelector(".bg-nenn")) {
    document.querySelector(".bg-nenn").classList.remove("hidden");
    document.querySelector("nav").classList.add("left-0");
    document.querySelector("nav").classList.remove("left-[-100%]");
  }
});

data.forEach((e) => {
  renderHtml.push(`<img
  src=${e.img}
  alt=${e.name}
/>
<div class="relative md:pb-0 pb-12">
  <i
    class="ti-close absolute bottom-3 hover:opacity-70 cursor-pointer md:top-0 md:right-0 detail-close z-10"
  ></i>
  <div class="text-gray-700 text-xl">${e.name}</div>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
    earum, inventore voluptas quisquam voluptatum vel saepe quibusdam,
    sapiente provident cum vero quia quod dolore voluptates fugit
    exercitationem nam ducimus minus. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Esse, incidunt nobis! Repellendus,
    non. Tenetur ipsa consequatur, sapiente beatae fugit quidem eaque.
    Doloremque iusto perspiciatis atque esse, quisquam autem saepe
    neque?
  </p>
  <button
    class="absolute right-0 rounded-full bg-fuchsia-600/70 px-4 py-2 bottom-0 hover:bg-fuchsia-400"
  >
    BUY NOW
  </button>
</div>`);
});

function renderViewDetail(a) {
  document.querySelector(".view-detail").innerHTML = renderHtml[a];
  document.querySelector(".detail-close").addEventListener("click", () => {
    document.querySelector(".fixed-detail").classList.add("hidden");
    document.querySelector(".view-detail").classList.add("top-[-100%]");
    document.querySelector(".view-detail").classList.add("top-1/2");
  });
}

document.querySelectorAll(".button-view-detail").forEach((e) => {
  if (e.value)
    e.addEventListener("click", () => {
      if (e.value === "1") renderViewDetail(0);
      else if (e.value === "2") renderViewDetail(1);
      else if (e.value === "3") renderViewDetail(2);
      else if (e.value === "4") renderViewDetail(3);
      else if (e.value === "5") renderViewDetail(4);
      else if (e.value === "6") renderViewDetail(5);
      document.querySelector(".fixed-detail").classList.remove("hidden");
      document.querySelector(".view-detail").classList.remove("top-[-100%]");
      document.querySelector(".view-detail").classList.add("top-1/2");
    });
});

const dataContact = [
  {
    icon: "ti-location-pin",
    title: "Head Offices",
    info: "810 Clis Road, Indraprash NW11 0PU India",
    icon2: "ti-email",
    title2: "Drop a Mail",
    info2: "tiendqpc0758@fpt.edu.vn",
  },
  {
    icon: "ti-email",
    title: "Drop a Mail",
    info: "tiendqpc0758@fpt.edu.vn",
    icon2: "ti-headphone-alt",
    title2: "Call Us",
    info2: "123456789 or 987654321",
  },
];

const renderContact = [];
dataContact.forEach((e) => {
  renderContact.push(`
  <div class="flex flex-col shadow-md text-center p-8">
    <div class="${e.icon} text-orange-400"></div>
    <span class="text-gray-700">${e.title}</span>
    <p>${e.info}</p>
  </div>
  <div class="flex flex-col text-center p-8 shadow-md">
    <div class="${e.icon2} text-orange-400"></div>
    <span class="text-gray-700">${e.title2}</span>
    <p>${e.info2}</p>
  </div>
  <div class="md:flex flex-col text-center p-8 shadow-md hidden">
     <div class="ti-email text-orange-400"></div>
     <span class="text-gray-700">Head</span>
     <p>810 Clis Road, Indrapash NW11 OPU, India</p>
  </div>
`);
});
function handleRenderContact(e) {
  if (document.querySelector(".contact-containerr")) {
    document.querySelector(".contact-containerr").innerHTML = renderContact[e];
  }
}
let contactNode;
function handleChecked(e) {
  if (contactNode) {
    contactNode.classList.remove("bg-black");
    contactNode.classList.add("bg-gray-300");
  }
  if (e.querySelector("div")) {
    e.querySelector("div").classList.add("bg-black");
    e.querySelector("div").classList.remove("bg-gray-300");
    contactNode = e.querySelector("div");
  }
}
document.querySelectorAll(".button-change").forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "1") {
      handleRenderContact(0);
      handleChecked(e);
    } else {
      handleRenderContact(1);
      handleChecked(e);
    }
  });
});

document.querySelector(".aside-menu").addEventListener("click", () => {
  document.querySelector("aside").classList.add("left-0");
  document.querySelector("aside").classList.remove("left-[-100%]");
});
document.querySelector(".close-aside").addEventListener("click", () => {
  document.querySelector("aside").classList.remove("left-0");
  document.querySelector("aside").classList.add("left-[-100%]");
});

document.querySelectorAll("img").forEach((e) => {
  if (!e.classList.contains("no-scalee")) {
    e.addEventListener("mouseover", () => {
      e.classList.add("scale-125");
      e.classList.add("duration-[10s]");
    });
  }
  e.addEventListener("mouseleave", () => {
    e.classList.remove("scale-125");
  });
});

const a = [
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
];

const renderDetail = [];
a.forEach((e) => {
  renderDetail.push(`
  <div class="flex justify-center bg-amber-600 items-center text-white hover:bg-amber-700 cursor-pointer md:hidden close-detail"> <div class="ti-close font-bold"></div>CLOSE</div>
  <img src=${e.img} alt=${e.title} class="no-scalee">
  <div class="relative">
    <div class="ti-close absolute top-0 right-0 hidden md:block cursor-pointer hover:opacity-70"></div>
    <div class="text-amber-600 text-2xl">${e.title} <i class="ti-location-pin"></i></div>
    <div class="text-amber-200 text-md">Detail</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae eum explicabo quaerat ratione itaque ut, nesciunt reiciendis? Est dolorum magni quaerat? Maxime deserunt commodi nihil beatae ratione. Quaerat, blanditiis?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ex in pariatur! Provident asperiores, non autem inventore harum earum debitis culpa est dolor perspiciatis veritatis, reiciendis corrupti suscipit dolorem possimus!
    </p>
    <ul class="mt-4">
      <li><span class="ti-hand-point-right mr-1 text-red-400"></span><span class="text-bold text-gray-600">DAY 1</span> - Departure at the airport and arrival at the hotel</li>
      <li><span class="ti-hand-point-right mr-1 text-red-400"></span><span class="text-bold text-gray-600">DAY 2</span> - Visit the main museums and luch included</li>
      <li><span class="ti-hand-point-right mr-1 text-red-400"></span><span class="text-bold text-gray-600">DAY 3</span> - Excursion in the natural oasis and picnic</li>
      <li><span class="ti-hand-point-right mr-1 text-red-400"></span><span class="text-bold text-gray-600">DAY 4</span> - Transfer to the airport and return to the agency</li>
      <li><span class="ti-hand-point-right mr-1 text-red-400"></span><span class="text-bold text-gray-600">DAY 5</span> - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dignissimos pariatur ab sunt obcaecati in officiis, earum, et accusantium.</li>
    </ul>
  </div>
 
</div>
<button class="absolute bottom-4 right-4 bg-orange-600 rounded-full px-4 text-white text-sm py-1 bg-gradient-to-bl">TRAVEL NOW!</button>`);
});

function handleRenderDetail(e) {
  document.querySelector(".render-detail").innerHTML = renderDetail[e];
}

document.querySelectorAll(".detail").forEach((e) => {
  e.addEventListener("click", (e) => {
    handleRenderDetail(Number(e.target.value));
    document.querySelector(".fixed-detail-2").classList.remove("hidden");
    document.querySelector(".detail-content").classList.add("left-1/2");
    document.querySelector(".detail-content").classList.remove("left-[-100%]");
  });
});
document.querySelectorAll(".close-detail").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".fixed-detail-2").classList.add("hidden");
    document.querySelector(".detail-content").classList.remove("left-1/2");
    document.querySelector(".detail-content").classList.add("left-[-100%]");
  });
});

document.querySelectorAll("a").forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

document.querySelectorAll(".contact-item").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".contact").classList.remove("hidden");
  });
});

document.querySelector(".go-home").addEventListener("click", () => {
  document.querySelector(".contact").classList.add("hidden");
});

const img = [
  "img/99-thuyen_hoa.jpg",
  "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
  "./img/hinh1.jpg",
  "./img/hinh2.jpg",
  "./img/hinh3.jpg",
  "./img/hinh4.jpg",
  "./img/hinh5.jpg",
  "./img/hinhanhdulich/hanquoc2.jpg",
  "./img/hinhanhdulich/trungquoc1.jpg",
];

let i = 0;

setInterval(() => {
  if (i === img.length) i = 0;

  document.querySelector(".slide").outerHTML = `
  <img
        src=${img[i]}
        class="object-cover w-full max-h-[800px] no-scalee slide z-0 duration-[3s]"
        alt=""
      />
  `;
  i += 1;
}, 4000);

const arrDataTravel = [
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
  ,
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
  ,
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
  ,
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
  ,
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
  ,
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
  ,
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "England",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Russia",
  },
  {
    img: "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
    title: "Vietnamese",
  },
  {
    img: "img/Beautiful_Oia_Sunset_.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh1.jpg",
    title: "China",
  },
  {
    img: "img/hinh2.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh3.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinh4.jpg",
    title: "China",
  },
  {
    img: "img/hinh5.jpg",
    title: "Thailand",
  },
  {
    img: "img/thailan.jpg",
    title: "Thailand",
  },
  {
    img: "img/VietNam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/village-1672547823032930944539.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
    title: "Vietnamese",
  },
  {
    img: "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
    title: "China",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
    title: "Thailand",
  },
  {
    img: "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/hanquoc1.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/hanquoc2.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nhatban1.jpg",
    title: "Japan",
  },
  {
    img: "img/hinhanhdulich/nuocanh.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/nuocnga.jpg",
    title: "Korean",
  },
  {
    img: "img/hinhanhdulich/trungquoc1.jpg",
    title: "China",
  },
];

function handelFilterData(e) {
  if (e === "All") {
    return arrDataTravel
      .map((e) => {
        return `
      <div class="bg-white/70 overflow-auto h-[300px] relative">
      <div class="overflow-hidden group relative h-[150px]">
        <img class='object-contain hover:scale-125 duration-[3s]'src=${e.img} alt=${e.title} />
      </div>
      <div class="pl-4 relative hover:bg-white">
        ${e.title}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          sequi aut veniam quo iure. Nulla nostrum velit minima
          perspiciati Lorem, ipsum
        </p>
        <button
          value = ${e.title}
          class="try-now-detail absolute bg-orange-500/70 right-0 px-4 py-0.5 rounded-es-md top-0 text-white/70 hover:bg-orange-500 hover:text-white"
        >
          Try now!
        </button>
      </div>
    </div>`;
      })
      .join(" ");
  }
  return arrDataTravel
    .filter((el) => {
      return el.title === e;
    })
    .map((e) => {
      return `
    <div class="bg-white/70 overflow-auto h-[300px] relative">
    <div class="overflow-hidden group relative h-[150px]">
      <img class='object-contain hover:scale-125 duration-[3s]'src=${e.img} alt=${e.title} />
    </div>
    <div class="pl-4 relative hover:bg-white">
      ${e.title}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
        sequi aut veniam quo iure. Nulla nostrum velit minima
        perspiciati Lorem, ipsum
      </p>
      <button
      value = ${e.title}
        class="try-now-detail absolute bg-orange-500/70 right-0 px-4 py-0.5 rounded-es-md top-0 text-white/70 hover:bg-orange-500 hover:text-white"
      >
        Try now!
      </button>
    </div>
  </div>`;
    })
    .join("");
}
// function handledataimg

function handleFilterDataImg(e) {
  return arrDataTravel
    .filter((el) => {
      return el.title === e;
    })
    .map((e) => e.img);
}
document.querySelectorAll(".button-render-filter").forEach((e) => {
  e.addEventListener("click", (el) => {
    document.querySelector(".container-filter").innerHTML = handelFilterData(
      el.target.value
    );
    // render detail filter
    document.querySelectorAll(".try-now-detail ").forEach((e) => {
      e.addEventListener("click", () => {
        document
          .querySelector(".fixed-filter-detail")
          .classList.remove("hidden");

        function handleFilterDataImg(e) {
          return arrDataTravel
            .filter((el) => {
              return el.title === e;
            })
            .map((e) => e.img);
        }
        let arr_img_filter = handleFilterDataImg(e.value);

        document.querySelector(".fixed-filter-detail").innerHTML =
          handleFilterDetail(arr_img_filter, e.value);

        console.log(document.querySelector(".handle-home-filter"));
        document
          .querySelector(".handle-home-filter")
          .addEventListener("click", () => {
            document
              .querySelector(".fixed-filter-detail")
              .classList.add("hidden");
          });

        console.log(document.querySelectorAll(".button-place"));
        document.querySelectorAll(".button-place").forEach((e) =>
          e.addEventListener("click", () => {
            document.querySelector(".parent-hotels").innerHTML =
              handleFilterHotels(e.value);
          })
        );
      });
    });
  });
});
// document.querySelector(".container-filter").innerHTML =
//   handelFilterData("Vietnamese");

// render detail filter
const dataHotels = [
  {
    img: "img/khachsan/1001_gia-phong-khach-san-dat-nhat-the-gioi-1.jpg",
    name: "Place 4",
    discout: "30%",
  },
  {
    img: "img/khachsan/3-phong-ngu-khach-san-3-sao (1).jpeg",
    name: "Place 1",
    dicount: "20%",
  },
  {
    img: "img/khachsan/4649abc-1-1661651678807-16616516792281980495798.jpg",
    name: "Place 5",
    discount: "40%",
  },
  {
    img: "img/khachsan/images (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (2).jpg",
    name: "Place 1",
    discount: "30%",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 2",
    discount: "10%",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
    discount: "40%",
  },
  {
    img: "img/khachsan/images (5).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (6).jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/images.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
    discount: "50%",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 1",
    discount: "10%",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 5",
  },
  {
    img: "img/khachsan/1001_gia-phong-khach-san-dat-nhat-the-gioi-1.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/3-phong-ngu-khach-san-3-sao (1).jpeg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/4649abc-1-1661651678807-16616516792281980495798.jpg",
    name: "Place 5",
    discount: "60%",
  },
  {
    img: "img/khachsan/images (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (2).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (5).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (6).jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/images.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 3",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 5",
  },

  {
    img: "img/khachsan/1001_gia-phong-khach-san-dat-nhat-the-gioi-1.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/3-phong-ngu-khach-san-3-sao (1).jpeg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/4649abc-1-1661651678807-16616516792281980495798.jpg",
    name: "Place 5",
  },
  {
    img: "img/khachsan/images (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (2).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 3",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (5).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (6).jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/images.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 3",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 5",
  },

  {
    img: "img/khachsan/1001_gia-phong-khach-san-dat-nhat-the-gioi-1.jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/3-phong-ngu-khach-san-3-sao (1).jpeg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/4649abc-1-1661651678807-16616516792281980495798.jpg",
    name: "Place 5",
  },
  {
    img: "img/khachsan/images (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (2).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 3",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (5).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (6).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images.jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 3",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 5",
  },

  {
    img: "img/khachsan/1001_gia-phong-khach-san-dat-nhat-the-gioi-1.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/3-phong-ngu-khach-san-3-sao (1).jpeg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/4649abc-1-1661651678807-16616516792281980495798.jpg",
    name: "Place 5",
  },
  {
    img: "img/khachsan/images (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (2).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place-1",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place-1",
  },
  {
    img: "img/khachsan/images (5).jpg",
    name: "Place-1",
  },
  {
    img: "img/khachsan/images (6).jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/images.jpg",
    name: "Place 4",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/images (4).jpg",
    name: "Place 2",
  },
  {
    img: "img/khachsan/images (3).jpg",
    name: "Place 1",
  },
  {
    img: "img/khachsan/VQK_2153 (1).jpg",
    name: "Place 5",
  },
];

function handleFilterHotels(name) {
  return dataHotels
    .filter((e) => e.name === name)
    .map((e) => {
      console.log(e.img);
      return `
            <div class="overflow-hidden rounded-xl relative">
            <div
              class="absolute right-0 rounded-bl-xl bg-black/40 z-10 text-white px-4"
            >
              ${e.name}
            </div>
            <div
              class="absolute bottom-0 left-0 rounded-tr-xl bg-red-500/50 z-10 cursor-pointer hover:bg-red-500 px-4 text-white"
            >
              ${e?.discount || "30%"}
            </div>
            <img
              src="${e.img}"
              class="object-cover hover:scale-125 duration-700 h-full w-full"
              alt=""
            />
            </div>
            `;
    })
    .join(" ");
}

const arrImgStore = [
  "https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/16660198/pexels-photo-16660198/free-photo-of-thanh-ph-m-c-toa-nha-cay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4058519/pexels-photo-4058519.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5466393/pexels-photo-5466393.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/15015528/pexels-photo-15015528/free-photo-of-mua-dong-nui-fuji-nh-t-b-n.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5745869/pexels-photo-5745869.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/15830266/pexels-photo-15830266/free-photo-of-nh-ng-dam-may-thanh-th-th-tr-n-m-t-ti-n.jpeg?auto=compress&cs=tinysrgb&w=600",
  ,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWfVhnaxmeO6SLymBdgqZZ9QOunrXUZLn3A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87kKJFKAl_HSdspyYZ1fJeLy_mkS2I9T2JA&usqp=CAU",
  "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
  "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
  "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
  "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
  "img/hinhanhdulich/nuocanh.jpg",
  "img/hinhanhdulich/nuocnga.jpg",
  "img/50608385247303002827764988277514784480205n-1553076977430344612414.webp",
  "img/Beautiful_Oia_Sunset_.jpg",
  "img/hinh1.jpg",
  "img/hinh2.jpg",
  "img/hinh3.jpg",
  "img/hinh4.jpg",
  "img/hinh5.jpg",
  "img/thailan.jpg",
  "img/VietNam.jpg",
  "img/village-1672547823032930944539.jpg",
  "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg",
  "img/hinhanhdulich/canh-dep-trung-quoc-41.jpg",
  "img/hinhanhdulich/du-lich-thai-lan-27-12-2017-1-550x366.jpg",
  "img/hinhanhdulich/du_lich_Nhat_Ban_ho_kawaguchi1_Gonatour.jpg",
  "img/hinhanhdulich/hanquoc1.jpg",
];
function handleFilterDetail(img, title) {
  const shuffledArray = [...arrImgStore]; // Tạo một bản sao của mảng ban đầu

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return `
  <div class="inline-block hover:opacity-70 cursor-pointer go-home mb-8 text-center w-full handle-home-filter text-white">
    <i class="ti-hand-point-right"></i> Trang chủ
    <i class="ti-home"></i>
  </div>
  <div
  class="full text-center font-serif xl:text-4xl lg:text-3xl md:text-2xl text-xl text-amber-600/30 my-4 hover:text-orange-600"
>
  ${title}
</div>

<div
  class="w-full sm:w-4/5 container xl:w-[1200px] md:grid-cols-2 grid-cols-1 mx-auto grid gap-4"
>
  <div class="overflow-hidden rounded-xl">
    <img
      src=${shuffledArray[0] || "img/hinh5.jpg"}
      class="object-cover hover:scale-125 duration-1000"
      alt=""
    />
  </div>
  <div class="relative">
    <div
      class="xl:text-2xl sm:text-xl text-xl text-blue-400 pl-4 md:pl-0"
    >
      Country Beautyful
      <p class="pl-4 md:pl-0 text-sm text-black/70 hover:text-white px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem consectetur temporibus reiciendis. Cumque, nam fugiat,
        delectus vero ratione non hic rem deleniti rerum numquam magni,
        aperiam corrupti dolorem explicabo eaque. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptate impedit fugiat
        accusantium architecto expedita ipsam saepe inventore illum
        cupiditate? Beatae debitis, voluptatibus molestias tempora
        reprehenderit quibusdam nulla consequuntur repudiandae dolore!
      </p>
    </div>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-12 md:py-0 absolute bottom-5"
    >
      <div
        class="text-blue-500/70 hidden xl:block text-center text-3xl ti-pencil"
      ></div>
      <div
        class="text-blue-500/70 hidden xl:block text-center text-3xl ti-world"
      ></div>
      <div
        class="text-blue-500/70 hidden xl:block text-center text-3xl ti-face-smile"
      ></div>
      <div
        class="text-blue-500/70 hidden xl:block text-center text-3xl ti-heart"
      ></div>
    </div>
  </div>
</div>
<div
  class="w-full text-center xl:text-3xl font-mono my-4 sm:text-xl lg:text-2xl text-xl text-orange-600"
>
  Place Favorites
</div>
<div
  class="grid xl:grid-cols-4 gap-2 container xl:w-[1200px] mx-auto mt-4 grid-cols-1"
>
  <div
    class="relative col-span-1 rounded-xl overflow-hidden max-h-[250px]"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[1] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative max-h-[250px] xl:col-span-2 rounded-xl overflow-hidden"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[2] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative max-h-[250px] col-span-1 rounded-xl overflow-hidden"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[3] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative max-h-[250px] xl:col-span-2 rounded-xl overflow-hidden"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[4] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative max-h-[250px] xl:col-span-2 rounded-xl overflow-hidden"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[5] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative col-span-1 rounded-xl overflow-hidden max-h-[250px]"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[6] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative col-span-1 rounded-xl overflow-hidden max-h-[250px]"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[7] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative col-span-1 rounded-xl overflow-hidden max-h-[250px]"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[8] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>
  <div
    class="relative col-span-1 rounded-xl overflow-hidden max-h-[250px]"
  >
    <img
      class="h-full w-full object-cover hover:scale-125 duration-[10s]"
      src="${
        shuffledArray[9] ||
        "img/hinhanhdulich/Canh-dep-thien-nhien-Viet-Nam.jpg"
      }"
      alt=""
    />
    <button
      class="rounded-xl text-xs text-white px-4 py-1 absolute top-4 right-4 bg-orange-600"
    >
      3 TOURS
    </button>
    <span class="absolute bottom-4 left-4 text-white">Morocco</span>
  </div>

  </div>
  <div class="max-w-md mx-auto bg-white/70 p-8 shadow-md rounded-md my-4">
    <h2 class="text-2xl font-bold mb-4">Đặt vé khách sạn</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Họ và tên</label>
        <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" type="text" placeholder="Nhập họ và tên của bạn">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" placeholder="Nhập địa chỉ email của bạn">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="hotel">Khách sạn</label>
        <select class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="hotel">
          <option value="">Chọn khách sạn</option>
          <option value="hotel1">Place 1</option>
          <option value="hotel2">Place 2</option>
          <option value="hotel3">Place 3</option>
          <option value="hotel2">Place 4</option>
          <option value="hotel3">Place 5</option>
          
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="checkin">Ngày nhận phòng</label>
        <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="checkin" type="date">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="checkout">Ngày trả phòng</label>
        <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="checkout" type="date">
      </div>
      <div class="text-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Đặt vé</button>
      </div>
    </form>
  </div>
  
<div
  class="w-full font-mono xl:text-3xl lg:text-2xl text-xl text-center my-4 text-pink-400"
>
  Hotels
</div>
<div
  class="grid grid-cols-12 lg:grid-cols-12 md:w-4/5 sm:grid-cols-2 w-full sm:w-3/4 xl:w-[1200px] gap-y-4 lg:gap-y-0 md:gap-x-4 mx-auto"
>
  <div
    class="col-span-12 lg:col-span-3 flex shadow-md lg:flex-col flex-row md:justify-start lg:p-4 bg-black/40 md:rounded-xl px-4 rounded-lg justify-between"
  >
    <button value = 'Place 1'class="text-white hover:opacity-70 cursor-pointer py-2 button-place">Place 1</button>
    <button value = 'Place 2'class="text-white hover:opacity-70 cursor-pointer py-2 button-place">Place 2</button>
    <button value = 'Place 3'class="text-white hover:opacity-70 cursor-pointer py-2 button-place">Place 3</button>
    <button value = 'Place 4'class="text-white hover:opacity-70 cursor-pointer py-2 button-place">Place 4</button>
    <button value = 'Place 5'class="text-white hover:opacity-70 cursor-pointer py-2 button-place">Place 5</button>
  </div>
  <div
    class="lg:col-span-9 col-span-12 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-4 parent-hotels"
  >
   
</div>
<div class="w-full text-center text-white/30 hover:text-white text-xl">tiendqpc07588-Dinh Quoc Tien</div>


`;
}

console.log(document.querySelector(".click-home"));
document.querySelector(".click-home").onClick;
document.querySelector(".click-home").addEventListener("click", () => {
  console.log("hello");
  document.querySelector(".filter-parent").classList.add("hidden");
});

document.querySelector(".filter-place-hot").addEventListener("click", () => {
  document.querySelector(".filter-parent").classList.remove("hidden");
});

// handle Login

const eRegister_pass = document.querySelector("#register-password");
const eRegister_user = document.querySelector("#register-username");
eRegister_user.addEventListener("input", () => {
  parentElement(eRegister_user).querySelector(".err-text-register").innerText =
    "";
});
eRegister_pass.addEventListener("input", () => {
  parentElement(eRegister_pass).querySelector(".err-text-register").innerText =
    "";
});
document
  .querySelectorAll("form")
  .forEach((e) => e.addEventListener("submit", (e) => e.preventDefault()));

function parentElement(e) {
  return e.parentElement;
}
// register
let Register = {};
const local = JSON.parse(localStorage.getItem("Login")) || [];
document.querySelector(".button-register").addEventListener("click", () => {
  console.log(local);

  if (eRegister_user.value.trim().length === 0) {
    parentElement(eRegister_user).querySelector(
      ".err-text-register"
    ).innerText = "Bạn đã nhập sai username";
  } else {
    if (local.find((e) => e.username === eRegister_user.value)) {
      parentElement(eRegister_user).querySelector(
        ".err-text-register"
      ).innerText = "Username đã tồn tại vui lòng chọn username khác";
    } else {
      parentElement(eRegister_user).querySelector(
        ".err-text-register"
      ).innerText = "";
      Register.username = eRegister_user.value;
    }
  }
  if (
    eRegister_pass.value.trim().length === 0 &&
    local.some((e) => e === eRegister_pass.value)
  ) {
    parentElement(eRegister_pass).querySelector(
      ".err-text-register"
    ).innerText = "Bạn đã nhập sai password";
  } else {
    parentElement(eRegister_pass).querySelector(
      ".err-text-register"
    ).innerText = "";
    Register.password = eRegister_pass.value;
  }
  console.log(Register);
  if (Register?.password && Register?.username) {
    localStorage.setItem("Login", JSON.stringify([...local, Register]));
    Register = {};
    document.querySelector(".fixed-register").classList.add("hidden");
  }
});

console.log(document.querySelector(".fixed-register"));
document.querySelector(".close-register").addEventListener("click", () => {
  document.querySelector(".fixed-register").classList.add("hidden");
});

// login
const eLoginUser = document.querySelector("#login-username");
const eLoginPass = document.querySelector("#login-password");
eLoginUser.addEventListener("input", () => {
  handleNotErrUserLogin();
});
eLoginPass.addEventListener("input", () => {
  handleNotErrPassLogin();
});
console.log(eLoginPass);
console.log(eLoginUser);
// not err login
function handleNotErrUserLogin() {
  parentElement(eLoginUser).querySelector(".err-text-login").innerText = "";
  eLoginUser.classList.remove("border-red-600");
  eLoginUser.classList.add("border-blue-500");
}
function handleNotErrPassLogin() {
  parentElement(eLoginPass).querySelector(".err-text-login").innerText = "";
  eLoginPass.classList.remove("border-red-600");
  eLoginPass.classList.add("border-blue-500");
}
// err login
function handleErrUserLogin(err = "Vui lòng nhập username") {
  parentElement(eLoginUser).querySelector(".err-text-login").innerText = err;
  eLoginUser.classList.add("border-red-600");
  eLoginUser.classList.remove("border-blue-500");
}
function handleErrPassLogin(err = "Vui lòng nhập password") {
  parentElement(eLoginPass).querySelector(".err-text-login").innerText = err;
  eLoginPass.classList.add("border-red-600");
  eLoginPass.classList.remove("border-blue-500");
}
let Login = {};

document.querySelector(".button-login").addEventListener("click", () => {
  const local = JSON.parse(localStorage.getItem("Login")) || [];

  if (eLoginUser.value.trim().length === 0) {
    handleErrUserLogin();
  } else {
    console.log(local.some((e) => e.password === eLoginPass.value));
    if (local.some((e) => e.username === eLoginUser.value)) {
      handleNotErrUserLogin();
      Login.username = eLoginUser.value;
    } else {
      handleErrUserLogin("Username không tồn tại vui lòng đăng ký");
    }
  }
  if (eLoginPass.value.trim().length === 0) {
    handleErrPassLogin();
  } else {
    if (local.some((e) => e.password === eLoginPass.value)) {
      handleNotErrPassLogin();
      Login.password = eLoginPass.value;
    } else {
      handleErrPassLogin("Password bạn nhập không chính xác");
    }
  }
  if (Login?.username && Login?.password) {
    document.querySelector(".fixed-login").classList.add("hidden");
  }
});

document.querySelector(".register-login").addEventListener("click", () => {
  document.querySelector(".fixed-register").classList.remove("hidden");
});
