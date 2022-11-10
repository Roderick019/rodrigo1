/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { React, useState } from 'react';
import { TextInput, Title, Switch,Surface,Chip,Button } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [descans, setDescans] = useState(false);
  const cambiarElSwitch = () => setDescans(!descans);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
          <Title> TextInput (email) </Title>
          <TextInput label="Email" placeholder='Escriu el teu email' />
          <Title> Button (amb text i icona) </Title>
          <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="contained" Text style={'black'} onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="text"onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="outlined"onPress={() => console.log('Pressed')}>Alien</Button>
          <Title> Swich Necessites un descans ? </Title>
          <Switch color='red' value={descans} onValueChange={cambiarElSwitch} />
          <Title> Bottons dins d'un component Surface ? </Title>
          <Surface style={styles.surface} elevation={4}><Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>Alien</Button></Surface>
          <Title> Provant Chips </Title>
          <View>
            <Chip icon="web" onPress={() => console.log('Pressed')}>Internet</Chip>
            <Chip icon="wifi" onPress={() => console.log('Pressed')}>Wifi</Chip>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};




const styles = StyleSheet.create({




  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
