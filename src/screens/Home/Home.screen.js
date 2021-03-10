import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
// import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { Avatar, Card, Paragraph, Title,Button } from 'react-native-paper'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  function ListUser() {
    return user.map(data => {
      return (
        <View
          key={data.id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }

  return (
    <>
      {/* <SafeAreaView style={styles.SafeAreaView1} /> */}
          <View style={{flex:1}}>
          <Card style={styled.carta}>
          <Card.Title style={styled.title} title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title style={styled.title}>Card title</Title>
            <Paragraph style={styled.title}>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={styled.carta}>
          <Card.Title style={styled.title} title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title style={styled.title}>Card title</Title>
            <Paragraph style={styled.title}>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}
const styled = StyleSheet.create({
  carta:{
    backgroundColor:'#FFF',
    color:'#323232',
    borderRadius:15,
    elevation:5
    },
  title:{
    color:'#323232',
  }

})

export default connect(mapStateToProps, null)(Home)
