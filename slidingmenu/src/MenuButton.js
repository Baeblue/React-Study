import React, { PureComponent } from 'react'
import './MenuButton.css'

class MenuButton extends PureComponent {
    // PureComponent 사용 시 주의 사항
    // 얕은 비교(shallow comparison)을 수행해 속성이나 상태의 변경 사항을 완벽하게 확인하지는 않는다.
    // PureComponent와 shouldComponentUpdate는 동시에 사용할 수 없다. 
    // 성능에도 문제가 있다. 컴포넌트마다 속성 및 상태가 변경됐는지 확인하는 작업은, 얕은 비교라 할지라도 연산 시간을 필요로 한다. 

    // 필요한 다른 업데이트 로직을 작성할 필요가 있을 때
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.handleMouseDown === this.props.handleMouseDown) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }

    render() {
        console.log('Rendering: MenuButton')
        return (
            <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}></button>
        )
    }
}

export default MenuButton