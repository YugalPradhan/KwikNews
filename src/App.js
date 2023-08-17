import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from "react-top-loading-bar"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (<Router>
      <div>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      /><Navbar/>
      </div>
      <Routes>
        {/* giving keys to components call is essential because only then react will re-render components */}
        <Route exact path="/" element={<News setProgress={this.setProgress}  key="top" country="in" category="top" pageSize={10}/>}>
        </Route>     
        <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" country="in" category="business" pageSize={10}/>}>
        </Route>     
        <Route exact path="/politics" element={<News setProgress={this.setProgress}  key="politics" country="in" category="politics" pageSize={10}/>}>
        </Route> 
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country="in" category="entertainment" pageSize={10}/>}>
        </Route>     
        <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" country="in" category="health" pageSize={10}/>}>
        </Route>     
        <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country="in" category="science" pageSize={10}/>}>
        </Route>     
        <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" country="in" category="sports" pageSize={10}/>}>
        </Route>     
        <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country="in" category="technology" pageSize={10}/>}>
        </Route>          
        <Route exact path="/environment" element={<News setProgress={this.setProgress}  key="environment" country="in,us" category="environment" pageSize={10}/>}>
        </Route>     
        <Route exact path="/world" element={<News setProgress={this.setProgress}  key="world" country="in" category="world" pageSize={10}/>}>
        </Route>     
      </Routes>
      </Router>
    )
  }
}
