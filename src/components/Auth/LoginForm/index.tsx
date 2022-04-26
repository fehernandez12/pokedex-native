import { View, StyleSheet, TextInput } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { user, userDetails } from "../../../utils/userDB";
import { AppText } from "../../AppText";
import { AppButton } from "../../AppButton";
import { AppTextInput } from "../../AppTextInput";

function LoginForm() {
  const [error, setError] = useState("");

  const { login } = useAuth();

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
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.container}>
      <AppText style={styles.title} bold={true}>
        Iniciar sesión
      </AppText>
      <AppTextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text: string) => formik.setFieldValue("username", text)}
      />
      <AppTextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text: string) => formik.setFieldValue("password", text)}
      />
      <AppButton
        onPress={() => formik.handleSubmit()}
        style={styles.buttonContainer}
      >
        <AppText style={styles.buttonText}>Iniciar sesión</AppText>
      </AppButton>
      <AppText style={styles.errorMessages}>{formik.errors.username}</AppText>
      <AppText style={styles.errorMessages}>{formik.errors.password}</AppText>
      <AppText style={styles.errorMessages}>{error}</AppText>
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
    marginTop: 150,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 100,
    marginBottom: 15,
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  buttonContainer: {
    backgroundColor: "#007AFF",
    marginHorizontal: 100,
    borderRadius: 3,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: undefined,
    color: "#fff",
  },
  errorMessages: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
  },
});

export { LoginForm };
