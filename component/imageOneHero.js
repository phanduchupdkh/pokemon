import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default class ImageOneHero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorHero: 'red',
            item: this.props.item
        }
        
    }
    onPressHero() {
        this.setState({
            colorHero: 'green',
            item: 0
        })
    }
    render() {
        const { arrayOriginHero, heroEnd} = this.props
        const { colorHero, item } = this.state
        console.log(heroEnd)
        return (
            <TouchableOpacity
                style={{
                    width: 30,
                    height: 30,
                    borderWidth: item ? 2 : 0,
                    borderColor: colorHero
                }}
                onPress={() => this.onPressHero()}
            >
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        transform: [{ rotate: '90deg' }]
                    }}
                    source={arrayOriginHero[item]}
                />
            </TouchableOpacity>
        )
    }
}
