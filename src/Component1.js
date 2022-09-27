import React from 'react';
import { hangman, hangmanImages } from './hangman';
import _ from "lodash";
import './styles/component1.scss'

export default function Component1() {
  let items = hangman();
  let images = hangmanImages();
  const [start, setStart] = React.useState('no')
  const [count, setCount] = React.useState(-1)
  const [item, setItem] = React.useState();
  const [char, setChar] = React.useState('');
  const [countSuccess, setCountSuccess] = React.useState(0);

  const StartGame = () => {
    setItem(items[Math.floor(Math.random() * items.length)]);
    console.log(items[Math.floor(Math.random() * items.length)]);
    let arr = document.getElementsByClassName('inputBox');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i].value = '';
    }
    setChar('');
    setCountSuccess(0)
    setCount(-1);
    setStart('yes');
  }
  const Loose = () => {

  }

  const Clicked = (character) => {
    if (item.includes(character) === false) {
      if (count <= 7) {
        setCount(count + 1);
      }
    }
    else {
      // let temp = [...char];
      // if (temp.includes(character) === false) {
      //   temp.push(character);
      // }
      // if (countSuccess === item.length - 1) {
      //   setWin('yes');
      // }
      let T = 0;
      setChar(character);
      setCountSuccess(countSuccess + 1);
      for (let i = 0; i < item.length ; i++){
         
      }
    }
  }
  console.log(countSuccess);
  return (
    <>
      {(start == 'no') ?
        <div className='start'>
          <div id='div1'><img src='./images/hangman-logo.png' alt='' />
          </div>
          <div id='div2'><img src='./images/start.png' alt='' onClick={StartGame} /></div>
        </div> :
        <div className='main'>
          <div className='image'>
            {count < 0 ? null :
              <img src={images[count]} alt='' style={{ height: '400px', width: '350px' }} />}
          </div>
          <div className='inputs' >
            <div id='div1'><h3>(UP City Names)</h3></div>
            <div id='div2'>
              {_.times(item.length, (i) => (
                <>
                  {(item[i] === char) ? <>
                    {/* {setCountSuccess(countSuccess + 1)} */}
                    <input className='inputBox' key={i} type='text' placeholder={item[i]} maxLength='1' value={char}
                      style={{ width: '2rem', height: '2rem', margin: '0.5rem', fontSize: '1.6rem' }} />
                  </> :
                    <input className='inputBox' key={i} type='text' placeholder={item[i]} maxLength='1'
                      style={{ width: '2rem', height: '2rem', margin: '0.5rem', fontSize: '1.6rem' }} />
                  }</>
                // <>
                //   {char.length > 0 ?
                //     _.times(char.length, (i)=>(
                //       <>
                //        {(char[i] === item[i]) ? 
                //        <div id={i} className='inputBoxes'>{item[i]}</div> :
                //        <div id={i} className='inputBoxes'></div>
                //       }
                //       </>
                //     )) : 
                //     <div id={i} className='inputBoxes'></div>
                //   }


                // </>
              ))}
            </div>
            <br />
            <div className='buttons'>
              <button onClick={() => Clicked('a')}>A</button>
              <button onClick={() => Clicked('b')}>B</button>
              <button onClick={() => Clicked('c')}>C</button>
              <button onClick={() => Clicked('d')}>D</button>
              <button onClick={() => Clicked('e')}>E</button>
              <button onClick={() => Clicked('f')}>F</button>
              <button onClick={() => Clicked('g')}>G</button>
              <button onClick={() => Clicked('h')}>H</button>
              <button onClick={() => Clicked('i')}>I</button>
              <button onClick={() => Clicked('j')}>J</button>
              <button onClick={() => Clicked('k')}>K</button>
              <button onClick={() => Clicked('l')}>L</button>
              <button onClick={() => Clicked('m')}>M</button>
              <button onClick={() => Clicked('n')}>N</button>
              <button onClick={() => Clicked('o')}>O</button>
              <button onClick={() => Clicked('p')}>P</button>
              <button onClick={() => Clicked('q')}>Q</button>
              <button onClick={() => Clicked('r')}>R</button>
              <button onClick={() => Clicked('s')}>S</button>
              <button onClick={() => Clicked('t')}>T</button>
              <button onClick={() => Clicked('u')}>U</button>
              <button onClick={() => Clicked('v')}>V</button>
              <button onClick={() => Clicked('w')}>W</button>
              <button onClick={() => Clicked('x')}>X</button>
              <button onClick={() => Clicked('y')}>Y</button>
              <button onClick={() => Clicked('z')}>Z</button>
            </div>
            {countSuccess === item.length ?
              <div>
                <h3>You won the game</h3>
                <button onClick={StartGame}>Continue to play</button>
              </div>
              : null}
            {count === 8 ?
              <div>
                <h2>You loose the game</h2>
                <button onClick={Loose}>Try again</button>
              </div>
              : null}
          </div>

        </div>
      }
    </>

  )
}