<template>
    <div>
      <h3>{{ question.text }}</h3>
      <!-- Question form fields -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: Object,
        required: true,
      },
    },
    // Question form logic
  };
  </script>