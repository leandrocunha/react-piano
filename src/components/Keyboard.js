import React from 'react';
import Controls from './Controls';
import Key from './Key';
import { keys } from './../utils';

const Keyboard = () => (
  <section className="Keyboard">
    <div className="Keyboard__Wrapper">
      <ul className="Keyboard__Wrapper__List">
        {Object.keys(keys()).map(key => (
          <Key key={key} keySymbol={key} />
        ))}
      </ul>
    </div>
    <Controls />
  </section>
);

export default Keyboard;
