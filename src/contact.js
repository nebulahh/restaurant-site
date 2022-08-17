import { header } from './index.js';

export function contactTab() {
  document.querySelector('#content').textContent = '';
  header();

  let section = document.createElement('section');

  let article = document.createElement('article');
  let div1Img = document.createElement('div');
  let div2 = document.createElement('div');
  let title = document.createElement('h5');
  let email = document.createElement('p');
  let phone = document.createElement('p');
  let names = document.createElement('p');
  let img = document.createElement('img');

  section.setAttribute('class', 'contact');
  div1Img.setAttribute('class', 'contact-img');

  img.src = '../img/food1.png';
  title.textContent = 'Owner';
  names.textContent = 'Mr Ben';
  email.textContent = 'benjamin224@gmail.com';
  phone.textContent = '+23453553222';

  div2.append(title, names, phone, email);
  div1Img.appendChild(img);
  article.append(div1Img, div2);

  // 2!
  let article2 = document.createElement('article');
  let div1Img2 = document.createElement('div');
  let div22 = document.createElement('div');
  let title2 = document.createElement('h5');
  let email2 = document.createElement('p');
  let phone2 = document.createElement('p');
  let names2 = document.createElement('p');
  let img2 = document.createElement('img');

  // section2.setAttribute('class', 'contact');
  div1Img2.setAttribute('class', 'contact-img two');

  img2.src = '../img/food1.png';
  title2.textContent = 'Chef';
  names2.textContent = 'Agba Cooker';
  email2.textContent = 'cookingthings@gmail.com';
  phone2.textContent = '+23487654332';

  div22.append(title2, names2, phone2, email2);
  div1Img2.appendChild(img2);
  article2.append(div1Img2, div22);

  // 3!
  let article3 = document.createElement('article');
  let div1Img3 = document.createElement('div');
  let div23 = document.createElement('div');
  let title3 = document.createElement('h5');
  let email3 = document.createElement('p');
  let phone3 = document.createElement('p');
  let names3 = document.createElement('p');
  let img3 = document.createElement('img');

  // section3.setAttribute('class', 'contact');
  div1Img3.setAttribute('class', 'contact-img');

  img3.src = '../img/food1.png';
  title3.textContent = 'Manager';
  names3.textContent = 'Mrs Sharon';
  email3.textContent = 'rosesharon@gmail.com';
  phone3.textContent = '+2343334342';

  div23.append(title3, names3, phone3, email3);
  div1Img3.appendChild(img3);
  article3.append(div1Img3, div23);

  section.append(article, article2, article3);

  document.querySelector('#content').appendChild(section);
}
