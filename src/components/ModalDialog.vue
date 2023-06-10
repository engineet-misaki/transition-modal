<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-dialog-inner">
        <div class="modal-thumb">
          <img
            :src="item.thumb"
            style="view-transition-name: card-img"
            width="1"
            height="1"
            alt=""
          />
          <p class="img-text">人気Ｎo.{{ count }}!!</p>
        </div>
        <div class="modal-discription">
          <p class="modal-date">{{ item.date }}公開!!</p>
          <p class="modal-title">{{ item.fullTitle }}</p>
          <p class="modal-text">↓↓↓気になる人はyoutubeへGO↓↓↓</p>
          <a target="_blank" class="modal-url" :href="item.url">{{
            item.url
          }}</a>
        </div>
      </div>
      <button class="modal-close" @click="emits('close')" aria-label="とじる">
        ×
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "../types/Item";

defineProps<{ item: Item; count: number }>();

const emits = defineEmits<{ (e: "close"): void }>();
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
  display: grid;
  place-items: center;

  backdrop-filter: blur(16px);
}

.modal-dialog {
  max-width: 960px;
  margin-top: 64px;
  height: calc(100% - 64px);
  position: relative;
  view-transition-name: card;
  background-color: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  overflow: auto; /* 本当はちゃんと対策してね */
}

@media (max-width: 960px) {
  .modal-dialog {
    margin-left: 32px;
    margin-right: 32px;
  }
}

.img-text {
  position: absolute;
  top: 12px;
  left: 12px;
}

.modal-thumb {
  width: 100%;
  height: 60vh;
  position: relative;
}
@media (max-width: 960px) {
  .modal-thumb {
    height: 40vh;
  }
}

.modal-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-date {
  position: relative;
  color: #4e4e4e;
  margin-top: 32px;
  background-color: white;
  font-size: 0.8rem;
}
.modal-title {
  position: relative;
  color: #222222;
  font-weight: bold;
  margin-top: 32px;
  background-color: white;
  font-size: 1.25rem;
}
.modal-url {
  margin-top: 32px;
  background-color: white;
  font-size: 0.8rem;
  word-break: break-all;
}
.modal-text {
  margin-top: 32px;
  font-size: 0.8rem;
}
.modal-discription {
  padding: 8px;
  position: relative;
  color: #222222;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background-color: rgba(122, 122, 122, 0.8);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.1s;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

::v-deep .headline {
  view-transition-name: card-title;
}
</style>
