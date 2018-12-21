import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      text : "",
      allWords : [],
      words : [],
      sentences : []
    }
    this.handleKeypress = this.handleKeypress.bind(this);
  }
  
  handleKeypress(event) {
    this.setState({
      text:event.target.value
    });
    
    let words = this.state.text.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
      this.setState({
        allWords : words
      });
    }

    let sortedWords = [];
    for (var i = 0; i < this.state.allWords.length; i++) {
      let w = this.state.allWords[i];
      if (w in sortedWords) {
        sortedWords[w] += 1;
      } else {
        sortedWords[w] = 1;
      }
    }

    // this.setState({
    //   words: Object.keys(sortedWords).sort((a, b) => {return sortedWords[a] > sortedWords[b] ? -1 : 1;})
    // })

    this.setState({
      words: this.sortByIntProperty(sortedWords, false)
    });
    
    let sentences = this.state.text.split(/[.|!|?]+/g);
    this.setState({
      sentences: sentences
    });
    
  }

  sortByIntProperty(obj, increasing = true) {
    /**
     * Converts an object of (key, int value) pairs into a sorted array, sorted by the values
     * Input:
     *    obj: {k1:v1, k2:v2, k3:v3}
     *    increasing (boolean): true if sort in increasing order
     * Output: sorted array: [[k1, v1], [k2, v2], [k3, v3]]
     */
    let sortable = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        sortable.push([key, obj[key]]); // each item is an array in the format [key, value]
      }
    }

    // sort items by value
    if (increasing) {
      sortable.sort((a, b) => {return a[1] < b[1] ? -1 : 1;});
    } else {
      sortable.sort((a, b) => {return a[1] > b[1] ? -1 : 1;});
    }      
    return sortable;
  }
  
  
  render(){
    return(
      <div id="app">
        <header class="App-header">
          <h1>Word Counter</h1>
        </header>

        <textarea id="maintext" ref='mytext' onChange={(event) => this.handleKeypress(event)}>{this.state.text}</textarea>
        
        <div>
          <table class="center">
            <tbody>
              
              <tr>
                <td class="left">
                  Characters: 
                </td>
                <td class="middle">
                  {this.state.text.length}
                </td>
              </tr>
              <tr>
                <td class="left">
                  Words: 
                </td>
                <td class="middle">
                  {(this.state.allWords) ? this.state.allWords.length : 0}
                </td>
              </tr>
              <tr>
                <td class="left">
                  Sentences: 
                </td>
                <td class="middle">
                  {(this.state.sentences.length <= 1) ? 0 : this.state.sentences.length - 1}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p></p>
        <div>
          <table class="center">
            <tbody>
              <tr>
                <th class="left">Word</th>
                <th class="middle">Frequency</th>
              </tr>
              {this.state.words.map(w => <tr><td class="left">{w[0]}</td><td class="middle">{w[1]}</td></tr>)}
            </tbody>
          </table>
        </div>

        <footer></footer>
        
        
      </div>
    );
  }
}
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }


export default App;