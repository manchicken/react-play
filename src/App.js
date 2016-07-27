import React, { Component } from 'react';
import ListView from './ListView';

export default class App extends Component {
  render() {
    const animals = [
      { name: 'Horse', legs: 4, sound: 'winny', type: 'land', color: 'brown' },
      { name: 'Dog',   legs: 4, sound: 'bark',  type: 'land', color: 'yellow' },
      { name: 'Crow',  legs: 2, sound: 'caw',   type: 'bird', color: 'black' },
    ];
    
    return (
      <div>
        <h1>Hello, world.</h1>
        {
        // <section>
        // <h2>Animal Sounds</h2>
        // <ListView
        //   items={animals}
        //   leftDecorator={SayNameDecorator}
        //   itemDisplay={ColorItemDisplay}
        //   rightDecorator={SoundDecorator} />
        // </section>

        // <section>
        // <h2>Animal Leg Counts</h2>
        // <ListView
        //   items={animals}
        //   leftDecorator={LegCountDecorator}
        //   rightDecorator={SoundDecorator} />
        // </section>
        }
        
        <section>
        <h2>Animal Leg Counts</h2>
        <ListView
          items={animals} />
        </section>
      </div>
    );
  }
}
