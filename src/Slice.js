import React, { PureComponent } from 'react'
import { getArr } from './util'

export default class Slice extends PureComponent {
  state = {
    offset: 0,
    isRolling: false,
    prevDigit: 0,
  }

  componentDidMount = () => {
    const { digit, height } = this.props
    const offset = -digit * height
    setTimeout(() => {
      this.setState({ offset, isRolling: true })
    }, 100)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.digit !== this.props.digit) {
      this.reset(this.props.digit)
      //slice move in animation
      const diff = nextProps.digit - this.props.digit
      const offset =
        diff > 0 ? -diff * this.props.height : -(diff + 10) * this.props.height
      setTimeout(() => {
        this.setState({ offset, isRolling: true })
      }, 100)
    }
  }

  reset = prevDigit => {
    this.setState({ offset: 0, isRolling: false, prevDigit })
  }
  render() {
    const { digit, width, height, delay } = this.props
    const arr = getArr(this.state.prevDigit, digit)
    return (
      <div
        className={`DigitRoll__Slice }`}
        style={{
          marginTop: this.state.offset + 'rem',
          transition: this.state.isRolling ? `margin ${delay}s ease` : '',
        }}
      >
        {arr.map((d, index) => (
          <div
            key={index}
            className="DigitRoll__Cell"
            style={{ height: height + 'rem', width: width + 'rem' }}
          >
            {d}
          </div>
        ))}
      </div>
    )
  }
}
