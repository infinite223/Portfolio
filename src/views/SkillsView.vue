<script setup lang="tsx">
  const mySkills = [
    'coś tam', 'dsads', 'dsadsa'
  ] 

</script>

<template>
  <div class="skillsList">
    <div v-for="skill in mySkills" class="skillItem">
      {{skill}}
    </div>

  </div>
</template>

<style scoped lang="scss">
  .skillsList {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    .skillItem {
      background-color: rgba(2, 16, 26, 0);
      padding: 10px;
      width: 200px;
      border-radius: 5px;
    }
  }
</style>
