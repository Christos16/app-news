import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, ScrollView,TouchableOpacity, Dimensions
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
const iconColor = "#ededed"
const Profile = ({ navigation }) => (
<ScrollView
         
        
          scrollEventThrottle={1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              width: width,
              borderBottomColor: "#eee",
              borderBottomWidth: 1
            }}
          >
            <View
              style={{
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 14
              }}
            >
              <View
                style={{
                  backgroundColor: iconColor,
                  height: 40,
                  width: 40,
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "rgba(255,255,255,.5)",
                    fontSize: 24,
                    fontWeight: "700"
                  }}
                >
                 "!23423423423432"
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, color: "black", fontWeight: "700"}}
                >
                  Mail Title
                </Text>
                <Text style={{ fontSize: 12, color: "#3b60c4" }}>7:33 AM</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  paddingRight: 24,
                  paddingTop: 2
                }}
              >
                <View>
                  <Text
                    style={{ fontWeight: "700" }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    Some description goes here here here here here here herhehre
                  </Text>
                  <Text
                    style={{ color: "gray", paddingTop: 2 }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    The mail content description goes here here here heere
                  </Text>
                </View>
                <TouchableOpacity
               //   onPress={this.starPressed}
                  style={{ padding: 12, paddingBottom: 0 }}
                >
                  <FontIcon
                    name={"user"}
                    color={"gray"}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
