const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector("nav");
let childNodes = nav.childNodes;
childNodes[1].innerText = siteContent["nav"]["nav-item-1"];
childNodes[3].innerText = siteContent["nav"]["nav-item-2"];
childNodes[5].innerText = siteContent["nav"]["nav-item-3"];
childNodes[7].innerText = siteContent["nav"]["nav-item-4"];
childNodes[9].innerText = siteContent["nav"]["nav-item-5"];
childNodes[11].innerText = siteContent["nav"]["nav-item-6"];

const newLink1 = document.createElement("a");
newLink1.innerText = 'Prependnav';
newLink1.href = '#';
nav.prepend(newLink1);

const newLink2 = document.createElement("a");
newLink2.innerText = 'Appendnav';
newLink2.href = '#';
nav.appendChild(newLink2);

let aLinks = document.querySelectorAll("a");
for (let i = 0; i < aLinks.length; i++) {
  aLinks[i].style.color = "green";
}

let mainHeading = document.querySelector('h1')
mainHeading.textContent = siteContent['cta']['h1']

let mainButton = document.querySelector('button')
mainButton.innerText = "Get Started"

let logo2 = document.querySelector("#cta-img")
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let mainContent = document.querySelectorAll('.text-content')
mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

let logo3 = document.querySelector("#middle-img")
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// contact

let contactInfo = document.querySelector('.contact')

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contactInfo.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contactInfo.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

let footer = document.querySelector('footer')

footer.innerText = "Copyright Great Idea! 2018"
