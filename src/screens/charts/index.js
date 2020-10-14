import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Text} from 'react-native-paper';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
} from 'victory-native';
import {
  LineChart,
  Grid,
  StackedAreaChart,
  YAxis,
  ProgressCircle,
  PieChart,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {LinearGradient, Stop, Defs} from 'react-native-svg';

const _data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _c_data = [
  50,
  10,
  40,
  95,
  -4,
  -24,
  85,
  91,
  35,
  53,
  -53,
  24,
  50,
  -20,
  -80,
];

const _m_data = [
  {
    month: new Date(2020, 0, 1),
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2020, 1, 1),
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2020, 2, 1),
    apples: 640,
    bananas: 960,
    cherries: 3640,
    dates: 400,
  },
  {
    month: new Date(2020, 3, 1),
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400,
  },
];
const _pie_data = [
  {
    key: 1,
    value: 50,
    svg: {fill: '#600080'},
    arc: {outerRadius: '120%', cornerRadius: 10},
  },
  {
    key: 2,
    value: 50,
    svg: {fill: '#9900cc'},
  },
  {
    key: 3,
    value: 40,
    svg: {fill: '#c61aff'},
  },
  {
    key: 4,
    value: 95,
    svg: {fill: '#d966ff'},
  },
  {
    key: 5,
    value: 35,
    svg: {fill: '#ecb3ff'},
  },
];

const colors = ['#8800ccff', '#aa00ffff', '#cc66ffff', '#ffaaffff'];
const keys = ['apples', 'bananas', 'cherries', 'dates'];

class ChartScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: _data,
      colors: colors,
      waveData: _m_data,
    };
    this.intervals = null;
    // props.navigation.setOptions({tabBarVisible: false});
  }

  componentDidMount() {
    this.intervals = setInterval(() => {
      let newData = this.state.data.map((item) => {
        const random = Math.floor(Math.random() * 10) + 1;
        const module2 = random % 2;
        if (module2 === 0) {
          return item - random;
        } else {
          return item + random;
        }
      });
      this.setState({
        data: newData,
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervals);
  }

  showActiveBar(_index) {
    const _colors = this.state.colors;
    const newColors = _colors.map((item, index) => {
      if (_index !== index) {
        console.log(
          _colors[index].substring(0, _colors[index].length - 2) + '30',
        );
        return _colors[index].substring(0, _colors[index].length - 2) + '30';
      } else {
        return _colors[index];
      }
    });
    this.setState({colors: newColors});
  }

  resetColors() {
    const newColors = this.state.colors.map((item, index) => {
      return item.substring(0, item.length - 2) + 'ff';
    });
    this.setState({colors: newColors});
  }

  render() {
    const svgs = this.state.waveData.map((item, index) => {
      return {
        onPressIn: () => this.showActiveBar(index),
        onPressOut: () => this.resetColors(),
      };
    });
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{padding: 16}}>
          {/* <VictoryChart>
        <VictoryGroup offset={20} colorScale={'qualitative'}>
          <VictoryBar
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 5},
            ]}
          />
          <VictoryBar
            data={[
              {x: 1, y: 2},
              {x: 2, y: 1},
              {x: 3, y: 7},
            ]}
          />
          <VictoryBar
            data={[
              {x: 1, y: 3},
              {x: 2, y: 4},
              {x: 3, y: 9},
            ]}
          />
        </VictoryGroup>
      </VictoryChart> */}
          <Title>LineChart 1</Title>
          <Card style={{flexDirection: 'row', height: 200, padding: 8}}>
            <LineChart
              animate={true}
              animationDuration={300}
              style={{height: 200}}
              showGrid={true}
              data={this.state.data}
              svg={{
                stroke: 'rgb(34, 155, 250)',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }}
              contentInset={{top: 10, bottom: 10}}>
              <Grid />
            </LineChart>
          </Card>

          <Title>LineChart-curve 2</Title>
          <Card style={{flexDirection: 'row', height: 200, padding: 8}}>
            <LineChart
              style={{height: 200}}
              data={this.state.data}
              animate
              contentInset={{top: 20, bottom: 20}}
              curve={shape.curveNatural}
              svg={{
                strokeWidth: 2,
                stroke: 'url(#gradient)',
              }}>
              <Grid />
              <Gradient />
            </LineChart>
          </Card>

          <Title>Progress Circle</Title>
          <Card style={{height: 200, paddingVertical: 32}}>
            <ProgressCircle
              style={{height: 140}}
              progress={0.7}
              progressColor={'rgb(134, 65, 244)'}
              startAngle={-Math.PI * 0.8}
              endAngle={Math.PI * 0.8}>
              <Title style={{alignSelf: 'center', top: 50}}>70%</Title>
            </ProgressCircle>
          </Card>

          <Title>Progress Circle</Title>
          <Card style={{height: 200}}>
            <PieChart
              style={{height: 200}}
              outerRadius={'70%'}
              innerRadius={10}
              data={_pie_data}
            />
          </Card>

          <Title>StackedAreaChart</Title>
          <Card style={{flexDirection: 'row', height: 200, padding: 8}}>
            <StackedAreaChart
              style={{flex: 1}}
              contentInset={{top: 10, bottom: 10}}
              data={_m_data}
              keys={keys}
              colors={this.state.colors}
              curve={shape.curveNatural}
              showGrid={true}
              svgs={svgs}>
              <Grid />
            </StackedAreaChart>

            <YAxis
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
              }}
              data={StackedAreaChart.extractDataPoints(_m_data, keys)}
              contentInset={{top: 10, bottom: 10}}
              svg={{
                fontSize: 8,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 0.5,
                alignmentBaseline: 'baseline',
                baselineShift: '2',
              }}
            />
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
      <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
    </LinearGradient>
  </Defs>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChartScreen;
