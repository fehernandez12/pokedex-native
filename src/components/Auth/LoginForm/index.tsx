import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

import { user, userDetails } from "../../../utils/userDB";

function LoginForm() {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      setError("");
      const { username, password } = values;
      if (username !== user.username || password !== user.password) {
        setError(
          "¡Cuidado, el nombre de usuario o el password son incorrectos!"
        );
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar sesión"
          onPress={() => formik.handleSubmit()}
          color="#fff"
        />
      </View>
      <Text style={styles.errorMessages}>{formik.errors.username}</Text>
      <Text style={styles.errorMessages}>{formik.errors.password}</Text>
      <Text style={styles.errorMessages}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required(
      "¡Cuidado, el nombre de usuario es requerido!"
    ),
    password: Yup.string().required("¡Cuidado, el password es requerido!"),
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  buttonContainer: {
    backgroundColor: "#007AFF",
    marginHorizontal: 100,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
  },
  errorMessages: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
  },
});

export { LoginForm };
