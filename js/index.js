const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
}

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

// ! Navigation
const containerNav = document.querySelector('header nav')

containerNav.children[0].textContent = siteContent.nav['nav-item-1']
containerNav.children[1].textContent = siteContent.nav['nav-item-2']
containerNav.children[2].textContent = siteContent.nav['nav-item-3']
containerNav.children[3].textContent = siteContent.nav['nav-item-4']
containerNav.children[4].textContent = siteContent.nav['nav-item-5']
containerNav.children[5].textContent = siteContent.nav['nav-item-6']

// ! CTA
const ctaDOM = document.querySelector('.cta-text')
ctaDOM.innerHTML = '<h1>DOM<br>Is<br>Awesome</h1><button>Get Started</button>'

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])
// ctaImage.src = siteContent.cta['img-src'] //*alternative way
// **************************************************************************

const product = document.querySelector('.text-content h4')
product.innerText = siteContent['main-content']['product-h4']
