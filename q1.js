// Using the countries array create the following array of arrays. The country name, the first three 
// letters of the country name and the length of the country name.
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
let arrcount = []
  const countriesArray =()=>{
      for(let i =0; i<countries.length;i++){
          let len = countries[i].length;
  let abb = countries[i].slice(0,3);
   arrcount = [...arrcount,[countries[i], abb, len]]
  
      }
      console.log(arrcount)
  return arrcount
  }
countriesArray()