import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "300px",
  margin: "auto",
}));

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // implementar a lógica de autenticação aqui
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
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Entrar
        </Button>
      </LoginPaper>
    </Box>
  );
};
