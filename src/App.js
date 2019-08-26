import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import axios from 'axios'

// import components
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import ProjectList from './components/ProjectList'
import ProjectCard from './components/ProjectCard'
import Projects from './assets/projects.js'




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      subject: '',
      email: '',
      message: '',
      messageSent: false
    }
  }

  handleOnChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleOnSubmit = async (evt) =>{
    evt.preventDefault();
    // const { name, subject, email, message } = this.state
    // const sendEmail =  await axios.post('http://localhost:3001/contact', {
    //   name,
    //   subject,
    //   email,
    //   message: `This message is from ${name} at email: ${email}. They said: ${message}`
    // })

    this.setState({ messageSent: true })
    this.clearForm();
  }

  clearForm = () =>{
    //this function will clear the input field without reloading the page
    this.setState({ 
      name: '',
      subject: '',
      email: '',
      message: ''
    })
  }

  allowContact = () =>{
    this.setState({ messageSent: false})
  }
  

  render(){
    return (
      <div className="App">
        <Header allowContact={this.allowContact}/>
        <Switch>
          <Route exact path ='/' render={()=> <About />} />
          <Route exact path ='/projects' render={()=> <ProjectList projects = {Projects} grabProject={this.grabProject}/>} />
          <Route exact path ='/contact' render={()=> <ContactForm  
            handleOnChange={this.handleOnChange} 
            handleOnSubmit={this.handleOnSubmit}
            name={this.state.name}
            email={this.state.email}
            subject={this.state.subject}
            message={this.state.message}
            messageSent={this.state.messageSent}
            />} />
          <Route exact path ='/projects/project' render={()=> <ProjectCard project={this.state.project_clicked} />}/> 
        </Switch>
        
        <Footer />
      </div>
    );
  }
  
}

export default App;
