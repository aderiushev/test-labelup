import React, { PropTypes, Component } from 'react';
import css from './style.scss'

export class SocialsList extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div className={css.socialsList}>
        {data.map((item, index) => (
          <div key={index} className={css.socialsList__item}>
            <div>{item.name} ({item.followers})</div>
            <div>{item.postPrice}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default SocialsList;