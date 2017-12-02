import React, { PropTypes, Component } from 'react';
import { TYPE_INSTAGRAM, TYPE_YOUTUBE } from './../../constants/common' 
import cn from 'classnames'
import css from './style.scss'

export class Menu extends React.Component {
  static defaultProps = {
    items: [
      {
        type: TYPE_INSTAGRAM,
        name: 'Instagram'
      },
      {
        type: TYPE_YOUTUBE,
        name: 'Youtube'
      }
    ]
  }
  render() {
    const { items, onChange, activeType } = this.props

    return (
      <div className={css.menu}>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn({[css.menu__item]: true, [css.menu__item_active]: item.type === activeType})}
            onClick={() => onChange(item.type)}
          >
            {item.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Menu;