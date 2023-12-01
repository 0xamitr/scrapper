import puppeteer from 'puppeteer';

const getfromsite = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto('https://etenders.gov.in/eprocure/app?component=%24DirectLink&page=FrontEndTendersByOrganisation&service=direct');

  const news = await page.evaluate(()=>{
    const d = new Date("30-Nov-2023 03:00 PM");
    let id = '#informal';
    let stack = [];
    let date;
    let index = 0;
    while(true){
      const head = document.querySelector(id);
      if(!head){
        break;
      }
      date = (head.querySelector(':nth-child(2').textContent);
      const formatteddate = new Date(date);
      if(formatteddate < d){
        break;
      }
      const contentwrap = head.querySelector(':nth-child(5');
      const content = contentwrap.querySelector('a').textContent;
      stack.push(content)
      id = '#informal_' + index;
      index += 1;
    }
    return {stack, id};
  });
  console.log("hello");
  console.log(news);
};

getfromsite();
