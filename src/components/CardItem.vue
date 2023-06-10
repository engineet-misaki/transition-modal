<template>
  <div v-if="selected" class="card"></div>

  <button
    v-if="!selected"
    class="card"
    @click="openDialog"
    :data-card="item.id"
  >
    <div class="card-thumb">
      <!-- div! 楽してごめん♪ -->
      <img loading="lazy" :src="item.thumb" width="1" height="1" alt="" />
      <CardHeadline class="card-headline" :item="item" :count="count" />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { Item } from "../types/Item";
import CardHeadline from "./CardHeadline.vue";

const props = defineProps<{
  item: Item;
  selected: boolean;
  count: number;
}>();

const emits = defineEmits<{ (e: "open", item: Item, count: number): void }>();
const openDialog = () => {
  console.log(props.item);
  emits("open", props.item, props.count);
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  height: 380px;
  display: block;
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;
}
@media (max-width: 960px) {
  .card {
    height: 180px;
  }
}
.card:hover {
  filter: brightness(1.1);
  scale: 1.05;
}

.card-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-headline {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
