import React, { Component } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import axios from 'axios'
import car from '../../img/car-front.png'
import Background from '../../img/minsk.jpg'
import './content.css'

const backgroundImageStyle = {
  backgroundImage: `url(${Background})`,
  width: '100%',
  height: '750px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: '-3',
}

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      number: '',
    }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName = event => this.setState({ name: event.target.value })

  handleChangeNumber = event => this.setState({ number: event.target.value })

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      number: this.state.number
    }

    axios.post(`https://someaddress.com/user`, { data })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render() {
    return (
      <div className="content-container" style={backgroundImageStyle}>
        <h1 className="content-text">
          Приглашаем водителей на автомобили организации для работы в Яндекс.Такси
        </h1>
        <form onSubmit={this.handleSubmit} >
          <div className="content-submit-form">
            <Input 
              onChange={this.handleChangeName} 
              placeholder="Ваше имя или фамилия" 
            />
            <Input
              onChange={this.handleChangeNumber}
              placeholder="Номер телефона"
            />
          </div>
          <div className="content-button-center">
            <Button>Отправить заявку</Button>
          </div>
        </form>
        <p className="content-text-calling">или звоните</p>
        <a
          href="tel:+375333766580" 
          className="content-text-number"
        >
          +375 (33) 376-65-80
        </a>
        <img 
          src={car} 
          className="content-img-car" 
          alt="Yandex Car" 
        />
      </div>
    )
  }
}