import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    Alert,
  } from "react-native";
  
  import React, { useState, useEffect } from "react";
  import firebase from "@firebase/app";
  import Colors from "../constants/Colors";
  
  export default function SignupScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onPressCreate = async () => {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(signup_Success, onFailure);
    };
  
    const signup_Success = (userCredential) => {
    console.log("SUCCESS");
    var curr_user = userCredential.user;
    curr_user.updateProfile({
      displayName: name,
    });
  };
  
    const onFailure = async () => {
      alert("Failure! Please try again.");
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs} 
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
           
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs} 
            onChangeText={setPassword}
            placeholder="Password (6+ characters)"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs} 
            onChangeText={setName}
            placeholder="Name"
           
          />
        </View>
       
  
        <Button
          onPress={onPressCreate}
          title="Sign up"
          color={Colors.snapblue}
          accessibilityLabel="Sign up"
        />
      </View>
    );
  }
  
  const offset = 16;
  const styles = StyleSheet.create({
    title: {
      marginTop: offset,
      marginLeft: offset,
      fontSize: offset,
    },
    nameInput: {
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: "#111111",
      borderWidth: 1,
      fontSize: offset,
    },
    buttonText: {
      marginLeft: offset,
      fontSize: 42,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.snapyellow,
    },
    inputContainer: {
        borderBottomColor: "#F5FCFF",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderBottomWidth: 1,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1,
      },
  });