import { connect } from 'dva'
import classNames from 'classnames'

import style from './index.less'

const Home = (props) => {

  const { 
    dispatch
  } = props

  const onClick = () => {
    // console.log(props)
    dispatch({
      type: 'text',
      payload: {
        value: 1
      }
    })
  }

  return (<div>
    <div onClick={onClick}>home</div>
    <div id="echarts-dash-1" className={classNames(style['echarts-dash-1'])}></div>
  </div>)
}

// 连接model
export default connect((state) => {
  console.log(state)
  return {
    header: state['home'].header
  }
})(Home)
