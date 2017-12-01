import React, { PureComponent } from 'react'
import Slice from './Slice'
import { formatDigit } from './util'
import './default.css'

export default class DigitRoll extends PureComponent {
  render() {
    const { num, length, height, width, divider, delay, className } = this.props
    const numArr = formatDigit(num, length, divider)
    const validDivider =
      divider !== undefined &&
      (typeof divider === 'string' || typeof divider === 'number')
    return (
      <div className="DigitRoll__Out" style={{ display: 'flex' }}>
        <div className={`DigitRoll ${className}`} style={{ height: height + 'rem' }}>
          {numArr.map((d, index) => {
            if (validDivider && index % 4 === 3) {
              return <Divider key={index} divider={divider} height={height} />
            }
            return (
              <Slice key={index} digit={d} height={height} width={width} delay={delay} />
            )
          })}
        </div>
      </div>
    )
  }
}

DigitRoll.defaultProps = {
  num: '000000',
  height: 3,
  width: 2,
  delay: 2,
  className: '',
}

const Divider = ({ divider, height }) => (
  <div style={{ height: height + 'rem' }} className="DigitRoll__Divider">
    {divider}
  </div>
)
