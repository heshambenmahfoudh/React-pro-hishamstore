import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import './Footer_co_right.css'

const Footer_co_right = () => {
  return (
    <div className="c_right">
      <div className="c_right_icon">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <BsInstagram />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </div>
      <p>
        Copyright ©2022. All Rights Reserved. — Designed with love by
        <a href="#"> Hisham </a>
      </p>
    </div>
  )
}

export default Footer_co_right
