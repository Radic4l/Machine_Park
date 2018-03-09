<template>
  <div>
    <div v-for="objet in items">
      <li>
        {{objet.name}} is {{objet.status}}
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        msg: 'Dead or alive ?',
        items: [
            {name: "jean", status: "Alive"},
            {name: "Marie", status: "Dead"},
            {name: "charle", status: "Dead"},
            {name: "Armond", status: "Alive"},
            {name: "Guillaume", status: "Dead"},
            {name: "Patrick", status: "Alive"}
          ],
    }
  }
}
</script>
<style>
</style>
