const { sum, sub, prod, digital_root, sum42, milesToKilometers, sayHelloTo, anomalyCode, fahrenheit2Celcius, power, nOfFibonacci, shuffleArray, iThink, loveMy } = require('./sketch');

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

/**
 * Sum to be defined
 */

test('Sum function exists', () => {
  expect(sum).toBeDefined();
});

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

function helloTest() {
  expect(sayHelloTo("Dan")).toBe("Hello, Dan!");
}

test('sayHelloTo function exists', () => {
  expect(sayHelloTo).toBeDefined();
});

test('sayHelloTo Dan should be Hello, Dan!', () => {
  helloTest();
});

/**
 * Prod to be defined
 */

test('Prod function exists',()=>{
  expect(prod).toBeDefined();
});

/**
 * prod function output
 */

test('prod calculates 2 * 10 = 20', () => {
  expect(prod(2, 10)).toBe(20);
});

/**
 * Digital Root to be defined
 */

 test('digital_root function exists', ()=>{
  expect('digital_root').toBeDefined();
 });

test('digital root of 265 should equal 4', () => {
  expect(digital_root(265)).toBe(4);
})

test('Sum42 function exists', () => {
  expect(sum42).toBeDefined();
});

test('Sum42 3 + 1 should be 46', () => {
  expect(sum42(3, 1)).toBe(46);
});

test('Sub function exists', () => {
  expect(sub).toBeDefined();
})

test('Sub 10 - 3 should be 7', () => {
  expect(sub(10,3)).toBe(7);
})

test('anomalyCode function exists', () => {
  expect(anomalyCode(1)).toBeDefined();
})

test('anomalyCode one should be 50', () => {
  expect(anomalyCode(7)).toBe(50);
})

test('anomalyCode ten should be 500', () => {
  expect(anomalyCode(78)).toBe(500);
})

test('anomalyCode hundred should be 5000', () => {
  expect(anomalyCode(789)).toBe(5000);
})

test('anomalyCode thousand should be 50000', () => {
  expect(anomalyCode(7891)).toBe(50000);
})

test('fahrenheit2Celcius function exists', () => {
  expect(fahrenheit2Celcius(1)).toBeDefined();
})

test('fahrenheit2Celcius 32 F should be 0 C', () => {
  expect(fahrenheit2Celcius(32)).toBe(0);
})

test('fahrenheit2Celcius 50 F should be 10 C', () => {
  expect(fahrenheit2Celcius(50)).toBe(10);
})

test('milesToKilometers 1 miles should be 1.609344 kilometeres', () => {
  expect(milesToKilometers(1)).toBe(1.609344);
})

test('power of one number', () => {
  expect(power(2, 2)).toBe(4);
})

test('the 20th number of fibonacci should be 6765', () => {
  expect(nOfFibonacci(20)).toBe(6765);
})

test('I think...', () => {
  expect(iThink("tests are annoying", "I appreciate them")).toBe("I think tests are annoying but I appreciate them.");
})

const testUrlInMarkdown = (file) => {
  let markdown = fs.readFileSync(file).toString();
  let urls = [];
  let regExp = /\[([^\]]+)\]\(([^)]+)\)/g;
  let result = null;
  while (result = regExp.exec(markdown)) urls.push(result[2]);
  return [urls.length, async () => {
    for (let url of urls) {
      if (url.includes("://") && !url.split("://")[0].includes("/")) {
        // An External url
        let res = await fetch(url);
        if (![200, 301, 302].includes(res.status)) throw new Error(`External Link Test: ${url} with bad response code ${res.status}`);
      } else {
        if (!fs.existsSync(path.join(path.dirname(file), url))) throw new Error(`Internal Link Test: ${url} with not found error`);
      }
    }
  }];
}

it('tests url avaliability in README.md', async () => {
  let [testCount, testFunc] = testUrlInMarkdown("README.md");
  jest.setTimeout(testCount * 5000);
  return await testFunc();
});

test('shuffleArray function exists', () => {
  expect(shuffleArray).toBeDefined();
});

test('randomly created and shuffled arrays should be different from the original', () => {
  const masterArray = [];
  const resultsArray = [];
  for ( let i=0; i<10; i++ ){
    let array = [];
    // random length between 10 and 30
    let len = Math.floor( Math.random()*20 + 10 );
    // add random values between 10 and 110
    for ( let j=0; j<len; j++ ) {
      array[j] = Math.floor( Math.random()*100 + 10 );
    }
    masterArray.push( array );
    let shuffled = shuffleArray(array);
    resultsArray.push( shuffled );

    // shuffle the array and expect it:
    // - have same length
    expect( shuffled.length ).toBe( array.length );
  }

  // shuffled arrays must have at least one that is different from the original
  expect( resultsArray ).not.toBe( masterArray );
});

test('Love function exists', () => {
  expect(loveMy("burger")).toBe("I love my burger<3");
})
