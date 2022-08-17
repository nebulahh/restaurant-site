// import body from './menu.js';
// window.addEventListener('DOMContentLoaded', (event) => {
//   // header section
// });
// import * as menu from './menu';

export function header() {
  let navLink = ['Home', 'Menu', 'Contact'];

  const headerEL = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  // home.forEach((b) => {
  //   const li = document.createElement('li');
  //   const a = document.createElement('a');
  //   a.textContent = b;
  //   a.href = '#';
  //   li.appendChild(a);
  //   ul.appendChild(li);

  //
  // });
  for (const i of navLink) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = i;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
    // li.setAttribute('id', i);
    console.log(i);

    if (li.textContent === 'Menu') {
      li.addEventListener('click', () => {
        import('./menu.js').then((menu) => {
          console.log(menu);
          menu.menu();
        });
      });
    } else if (li.textContent === 'Home') {
      li.addEventListener('click', () => {
        import('./index.js').then((home) => {
          document.querySelector('#content').textContent = '';
          home.header();
          homeBody();
          // header;
        });
      });
    } else if (li.textContent === 'Contact') {
      li.addEventListener('click', () => {
        import('./contact.js').then((contact) => {
          contact.contactTab();
        });
      });
    }
  }

  nav.appendChild(ul);
  headerEL.appendChild(nav);
  document.getElementById('content').appendChild(headerEL);
}

header();

// export { header };
function homeBody() {
  // main section
  const main = document.createElement('main');
  const topSection = document.createElement('section');
  const topSectionDiv1 = document.createElement('div');
  const topSectionDiv2 = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const insideTopSectionDiv = document.createElement('div');
  const days = document.createElement('p');
  const wknds = document.createElement('p');
  const cta = document.createElement('div');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const img = document.createElement('img');

  topSectionDiv1.setAttribute('class', 'top');
  topSectionDiv2.setAttribute('class', 'top');

  // left div content
  h2.textContent = 'Serves You The Best Fine Dining Experience';
  p.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos nihil incidunt voluptate, necessitatibus quibusdam quos cumque. Aspernatur quibusdam qui consequuntur facilis voluptatem aperiam sint distinctio assumenda vel cum! Quidem!';
  days.textContent = 'Thursday, Friday &  Monday 4:00pm - 6:00pm';
  wknds.textContent = 'Saturday - Sunday 3:00pm - 6:00pm';
  cta.setAttribute('id', 'cta');
  btn1.type = 'button';
  btn2.type = 'button';
  btn1.textContent = 'See the Menu';
  btn2.textContent = 'Book a Table';

  // right div content
  img.src = '../img/food.jpg';
  img.alt = 'food';

  // top left section
  cta.append(btn1, btn2);
  insideTopSectionDiv.append(days, wknds, cta);
  topSectionDiv1.append(h2, p, insideTopSectionDiv);

  // top right section
  topSectionDiv2.appendChild(img);
  topSection.append(topSectionDiv1, topSectionDiv2);

  // info section inside main
  const infoSection = document.createElement('section');
  const infoDiv1 = document.createElement('div');
  const copyH2 = document.createElement('h2');
  const copyP = document.createElement('p');
  const infoDiv2 = document.createElement('div');
  const infoImgDiv = document.createElement('div');
  const infoImg = document.createElement('img');
  const innerInfoCopyDiv = document.createElement('div');
  const innerInfoCopyDivH4 = document.createElement('h4');
  const innerInfoCopyDivp = document.createElement('p');

  infoSection.setAttribute('id', 'info');
  infoDiv1.setAttribute('class', 'copy');
  copyH2.textContent = 'Feed Your Inner Perfectionist.';
  copyP.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel quos asperiores quod labore iste non, minima commodi adipisci soluta.';

  infoDiv1.append(copyH2, copyP);

  infoDiv2.setAttribute('id', 'inner-info');
  infoImgDiv.setAttribute('id', 'info-img');
  infoImg.src = '../img/food.jpg';
  infoImg.alt = 'food';
  innerInfoCopyDiv.setAttribute('class', 'copy');
  innerInfoCopyDivH4.textContent = 'Amazing Appetizer.';
  innerInfoCopyDivp.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur voluptatum quis quas nam ducimus minus vitae tenetur minima fuga et excepturi soluta repellendus perferendis, dolore earum quidem eligendi veritatis.';

  infoImgDiv.appendChild(infoImg);

  innerInfoCopyDiv.append(innerInfoCopyDivH4, innerInfoCopyDivp);

  infoDiv2.append(infoImgDiv, innerInfoCopyDiv);

  infoSection.append(infoDiv1, infoDiv2);

  // location section
  const location = document.createElement('section');

  location.setAttribute('id', 'location');
  location.textContent = '224 Fola Agoro, Yaba, Lagos';

  main.append(topSection, infoSection, location);
  document.getElementById('content').append(main);
}

homeBody();
