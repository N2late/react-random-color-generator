import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#fff');
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [boxHeight, setBoxHeight] = useState('');
  console.log(boxWidth);
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: boxWidth ? parseInt(boxWidth) : 300,
          height: boxHeight ? parseInt(boxHeight) : 200,
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          borderRadius: 10,
          transition: 'color 1s ease-out, background-color 1s ease-out',
        }}
      >
        <div style={{ backgroundColor: 'white', padding: 5, borderRadius: 5 }}>
          Generated Color: <span style={{ color: color }}>{color}</span>
        </div>
      </div>
      <button
        style={{
          marginTop: 20,
          backgroundColor: 'black',
          color: 'white',
          fontSize: 20,
          padding: '10 60',
          borderRadius: 5,
          margin: '10 0',
          cursor: 'pointer',
        }}
        onClick={() => setColor(randomColor)}
      >
        Generate
      </button>
      <h3> Or choose: </h3>
      <label
        style={{ display: 'inline-block', width: 100, textAlign: 'right' }}
        htmlFor="hex"
      >
        Hex:{' '}
      </label>
      <input
        style={{
          width: 200,
        }}
        id="hex"
        name="hex"
        value={hue}
        placeholder="ex. #0000FF"
        onChange={(e) => {
          setHue(e.currentTarget.value);
          setColor(
            randomColor({
              luminosity: lightness ? lightness : 'random',
              hue: hue,
            }),
          );
        }}
      />{' '}
      <br />
      <label
        style={{ display: 'inline-block', width: 100, textAlign: 'right' }}
        htmlFor="luminosity"
      >
        Luminosity:{' '}
      </label>
      <input
        style={{ width: 200, marginTop: 10 }}
        id="luminosity"
        name="luminosity"
        value={lightness}
        placeholder="ex. light or dark"
        onChange={(e) => {
          setLightness(e.currentTarget.value);
          setColor(
            randomColor({
              luminosity: lightness,
              hue: hue ? hue : 'random',
            }),
          );
        }}
      />
      <h3>Choose box size:</h3>
      <label
        style={{ display: 'inline-block', width: 100, textAlign: 'right' }}
        htmlFor="width"
      >
        {' '}
        width:{' '}
      </label>
      <input
        style={{
          width: 200,
        }}
        id="width"
        name="width"
        value={boxWidth}
        placeholder="ex. 150"
        onChange={(e) => setBoxWidth(e.currentTarget.value)}
      />{' '}
      <br />
      <label
        style={{ display: 'inline-block', width: 100, textAlign: 'right' }}
        htmlFor="height"
      >
        height:{' '}
      </label>
      <input
        style={{
          width: 200,
          marginTop: 10,
        }}
        id="height"
        name="height"
        value={boxHeight}
        placeholder="ex. 150"
        onChange={(e) => setBoxHeight(e.currentTarget.value)}
      />{' '}
    </div>
  );
}

export default App;
