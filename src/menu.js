import { header } from './index.js';

function menu() {
  document.querySelector('#content').textContent = '';
  header();
  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'menu-header');
  h1.textContent = 'The Menu';

  // 1!
  let section = document.createElement('section');
  let article = document.createElement('article');
  let imgDiv = document.createElement('div');
  let img = document.createElement('img');
  let foodNameDiv = document.createElement('div');
  let foodName = document.createElement('h2');
  let foodPrice = document.createElement('p');
  const foodDetails = document.createElement('p');

  img.src = '../img/lasg.jpeg';
  imgDiv.setAttribute('class', 'menu-img');
  foodName.textContent = 'Lasagna';
  foodPrice.textContent = '$13.50';
  foodDetails.textContent = 'Special sauce, mozzarella, parmesan, ground beef';
  section.setAttribute('class', 'menu-section');

  foodNameDiv.append(foodName, foodDetails, foodPrice);
  imgDiv.appendChild(img);
  article.append(imgDiv, foodNameDiv);

  // 2!
  let article2 = document.createElement('article');
  let imgDiv2 = document.createElement('div');
  let img2 = document.createElement('img');
  let foodNameDiv2 = document.createElement('div');
  let foodName2 = document.createElement('h2');
  let foodPrice2 = document.createElement('p');
  const foodDetails2 = document.createElement('p');

  img2.src = '../img/rrav.jpeg';
  imgDiv2.setAttribute('class', 'menu-img');
  foodName2.textContent = 'Ravioli';
  foodDetails2.textContent = 'Ravioli filled with cheese';
  foodPrice2.textContent = '$14.50';

  foodNameDiv2.append(foodName2, foodDetails2, foodPrice2);
  imgDiv2.appendChild(img2);
  article2.append(imgDiv2, foodNameDiv2);

  // 3!
  let article3 = document.createElement('article');
  let imgDiv3 = document.createElement('div');
  let img3 = document.createElement('img');
  let foodNameDiv3 = document.createElement('div');
  let foodName3 = document.createElement('h2');
  let foodPrice3 = document.createElement('p');
  const foodDetails3 = document.createElement('p');

  img3.src = '../img/spag.jpeg';
  imgDiv3.setAttribute('class', 'menu-img');
  foodName3.textContent = 'Spaghetti Classica';
  foodPrice3.textContent = '$11.00';
  foodDetails3.textContent = 'Fresh tomatoes, onions, ground beef';

  foodNameDiv3.append(foodName3, foodDetails3, foodPrice3);
  imgDiv3.appendChild(img3);
  article3.append(imgDiv3, foodNameDiv3);

  // 4!
  let article4 = document.createElement('article');
  let imgDiv4 = document.createElement('div');
  let img4 = document.createElement('img');
  let foodNameDiv4 = document.createElement('div');
  let foodName4 = document.createElement('h2');
  let foodPrice4 = document.createElement('p');
  const foodDetails4 = document.createElement('p');

  img4.src = '../img/bruc.jpeg';
  imgDiv4.setAttribute('class', 'menu-img');
  foodName4.textContent = 'Bruschetta';
  foodPrice4.textContent = '$8.50';
  foodDetails4.textContent = 'Bread with pesto, tomatoes, onion, garlic';

  foodNameDiv4.append(foodName4, foodDetails4, foodPrice4);
  imgDiv4.appendChild(img4);
  article4.append(imgDiv4, foodNameDiv4);

  section.append(article, article2, article3, article4);

  document.querySelector('#content').append(h1, section);
}

export { menu };
