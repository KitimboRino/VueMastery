<template>
  <div class="networkError">
    <h1>Uh-oh!</h1>
    <h3>
      It looks like you are expriencing some network issues, please take a
      breathe and <a href="#" @click="$router.go(-1)">Click here </a>to try
      again
    </h3>
  </div>
</template>
