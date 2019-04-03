import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index test', () => {
  it('should run our first test', () =>{
    expect('test').to.equal('test')
  });
});

// describe('index.htm',()=>{
//   it('should say hello', (done) =>{
//     const index = fs.readFileSync('./src/index.html', "utf-8");
//     jsdom.env(index, function(err, window){
//       const h1 = window.docoment.getElementsByTagName('h1')[0];
//       expect(h1.innerHTML).toEqual("Hello World!");
//       done();
//       Window.close();
//     })
//   });
// });
