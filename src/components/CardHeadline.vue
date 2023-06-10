<template>
  <div>
    <div class="headline">
      <div class="date">{{ item.date }}</div>
      <div class="title">人気{{ count }}位</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Item } from "../types/Item";

defineProps<{ item: Item; count: number }>();
</script>

<style scoped>
.headline {
  position: relative;
  height: 100%;
  width: 100%;
}
.date {
  color: white;
  font-size: 0.8rem;
  /*color: rgba(255,255,255,0.7);*/
  /* opacity: 0.75; */
  opacity: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 8px;
  background-color: rgba(0, 0, 0, 0.3);
}
.title {
  color: white;
  font-size: 2rem;
  line-height: 1;
  font-weight: 900;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.3);
}
@media (max-width: 960px) {
  .headline {
    width: initial;
  }
  .title {
    font-size: 1em;
  }
}
</style>
