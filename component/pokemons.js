import React, { useState, Component, createRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import createArrayStart from '../function/common.js'
import arrayOriginHero from './imageHero'
import ImageOneHero from './imageOneHero.js';

class ShowHeroOneLine extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        const { props } = this
        return props.heroOneLine.map((item, w) => <ImageOneHero
            key={w}
            w={w}
            h={props.h}
            arrayOriginHero={arrayOriginHero}
            item={item}
            heroEnd={this.props.setStateEndStart}
        />
        )
    }
}
const ShowHeros = (props) => {
    return createArrayStart().map((item, h) => <View
        style={{
            flex: 1,
            margin: 16,
            flexWrap: 'wrap'
        }}
        key={h}
    >
        <ShowHeroOneLine heroOneLine={item} h={h} setStateEndStart={props.setStateEndStart} />
    </View>
    )
}

class Pokemons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arraySaveHero: createArrayStart(),
            heroStart: [],
            heroEnd: []
        }
        this['canvas'] = createRef()
    }

    render() {
        const { heroEnd } = this.state

        return (
            <View style={{ borderColor: 'green', borderWidth: 2, alignItems: 'center' }}>
                <View style={{ marginTop: -16 }}></View>
                <ShowHeros
                    setStateEndStart={this.setState}
                    ref={showHerosRef => this.showHeros = showHerosRef}
                />
                <View style={{ marginTop: 16 }}></View>
            </View>
        )
    }
};

export default Pokemons;