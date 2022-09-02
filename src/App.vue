<template>
  <nav>
    <router-link to="/">Temperature</router-link> |
    <router-link to="/distance">Distance</router-link> |
  </nav>
  <router-view/>
</template>


<style>
body {
  background-color: #E1FFEE;
}

#app {
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  color: #2c3e50;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* global component styles */
.calculator_container {
  margin-top: 2em;
  display: flex;
  gap : 10px;
  justify-content: center;
  align-items: center;
}

.convert_btn {
  padding : 5px 10px;
  background-color: #7FBCD2;
  color : #2c3e50;
  border: none;
  border-radius: 3px;
}

.input__form {
  padding : 5px 10px;
  font-family: 'Lato',sans-serif;
}

.result {
    font-size: 1.6em;
}
</style>
