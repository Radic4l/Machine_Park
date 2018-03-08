<template>
  <div id="test" v-for="test in tests">
    {{name}} {{status}}
  </div>
</template>
<script>
export default {
  name: "test",
  data: () => [
    {name: "jean", status: "Alive"},
    {name: "Marie", status: "Dead"},
    {name: "charle", status: "Dead"},
    {name: "Armond", status: "Alive"},
    {name: "Guillaume", status: "Dead"},
    {name: "Patick", status: "Alive"}
  ]
}
</script>
<style>
#data {
  color: red;
}
</style>
