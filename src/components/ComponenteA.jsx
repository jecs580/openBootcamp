import React from 'react'
import PropTypes from 'prop-types'
import ComponenteB from './ComponenteB';
import { Contacto } from '../models/contacto.class';

const ComponenteA = () => {
    const defaultContact = new Contacto('Jorge','Callisaya','sanchezenrique580@gmail.com', true);
  return (
    <div>
    <div>
        <h1>Your Contacts:</h1>
    </div>
    <ComponenteB contacto={defaultContact}/>
</div>
  )
}

ComponenteA.propTypes = {}

export default ComponenteA