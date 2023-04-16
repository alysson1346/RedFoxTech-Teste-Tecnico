import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../../services";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/authenticad";

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "300px",
  margin: "auto",
}));

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email, password };
  const history = useHistory();

  const handleLogin = (data) => {
    console.log(data);
    Api.post("user/login", data)
      .then((res) => {
        const token = JSON.stringify(res.data.token);
        localStorage.setItem("@UserAuthorization:token", token);
        login();
        return history.push("/manage-pokemon");
      })
      .catch((err) => {
        return toast.error("E-mail ou senha inválidos", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginPaper>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleLogin(data);
          }}
        >
          Entrar
        </Button>
      </LoginPaper>
      <ToastContainer />
    </Box>
  );
};
