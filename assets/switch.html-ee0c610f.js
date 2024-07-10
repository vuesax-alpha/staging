const e=JSON.parse(`{"key":"v-23835ae5","path":"/components/switch.html","title":"Switch","lang":"en-US","frontmatter":{"PROPS":[{"name":"v-model","type":"Boolean, Array","values":"Boolean, Array","description":"Determine the value of the component and if it is an array add or remove the value.","default":null,"link":null,"usage":"#dafault","code":"<template>\\n  <vs-switch v-model=\\"active\\" />\\n  <vs-switch v-model=\\"active2\\" />\\n  <vs-switch v-model=\\"active3\\" disabled />\\n</template>\\n"},{"name":"color","type":"String","values":"Vuesax main colors, RGB y HEX","description":"Change the color of the component when it is in active state.","default":"primary","link":null,"usage":"#color","code":null},{"name":"loading","type":"Boolean","values":"true, false","description":"Add a loading animation to the component.","default":false,"link":null,"usage":"#loading","code":"<template>\\n  <vs-switch v-model=\\"activeLoading\\">\\n    Active Loading\\n  </vs-switch>\\n  <vs-switch :loading=\\"activeLoading\\" v-model=\\"active2\\" />\\n</template>\\n<script lang=\\"ts\\" setup>\\n  import { ref } from \\"vue\\"\\n\\n  const active2       = ref<boolean>()\\n  const activeLoading = ref<boolean>()\\n<\/script>\\n"},{"name":"indeterminate","type":"Boolean","values":"true, false","description":"Determine if the component is in an undetermined state (being in this state is disabled).","default":false,"link":null,"usage":"#indeterminate","code":"<template>\\n  <vs-switch indeterminate v-model=\\"active\\" />\\n  <vs-switch indeterminate v-model=\\"active2\\" />\\n  <vs-switch indeterminate v-model=\\"active3\\" disabled />\\n</template>\\n"},{"name":"Square","type":"Boolean","values":"true, false","description":"Change the style of the component from circular to square.","default":false,"link":null,"usage":"#square","code":"<template>\\n  <vs-switch square v-model=\\"active\\" />\\n  <vs-switch square v-model=\\"active2\\" />\\n  <vs-switch square v-model=\\"active3\\" disabled />\\n</template>\\n"},{"name":"icon","type":"Boolean","values":"true, false","description":"Change the style of the circle by making it transparent (used when adding the slot = \\"circle\\").","default":false,"link":null,"usage":"#icons","code":"<template>\\n  <vs-switch color=\\"#7d33ff\\" icon v-model=\\"active6\\">\\n    <template #circle>\\n        <i v-if=\\"active6\\" class='bx bxl-instagram-alt'></i>\\n        <i v-else class='bx bxl-instagram' ></i>\\n    </template>\\n  </vs-switch>\\n</template>\\n"},{"name":"notValue","type":"String","values":"String","description":"Determine the return value of the component when inactive.","default":null,"link":null,"usage":null,"code":null}],"SLOTS":[{"name":"default","type":"slot","values":null,"description":"Add text within the component.","default":null,"link":null,"usage":"#text","code":"<template>\\n  <vs-switch v-model=\\"active\\">\\n    Suscribe\\n  </vs-switch>\\n  <vs-switch v-model=\\"active2\\">\\n    <template #off>\\n        Off\\n    </template>\\n    <template #on>\\n        On\\n    </template>\\n  </vs-switch>\\n  <vs-switch v-model=\\"active3\\">\\n    <template #off>\\n        default\\n    </template>\\n    <template #on>\\n        Premium\\n    </template>\\n  </vs-switch>\\n</template>\\n"},{"name":"on","type":"slot","values":null,"description":"Add text within the component when it is in active state.","default":null,"link":null,"usage":"#icons","code":"<vs-switch v-model=\\"active1\\">\\n  <template #off>\\n      <i class='bx bxs-volume-mute' ></i>\\n  </template>\\n  <template #on>\\n      <i class='bx bxs-volume-full' ></i>\\n  </template>\\n</vs-switch>\\n"},{"name":"off","type":"slot","values":null,"description":"Add text within the component when it is in idle state.","default":null,"link":null,"usage":"#icons","code":"<vs-switch v-model=\\"active1\\">\\n  <template #off>\\n      <i class='bx bxs-volume-mute' ></i>\\n  </template>\\n  <template #on>\\n      <i class='bx bxs-volume-full' ></i>\\n  </template>\\n</vs-switch>\\n"},{"name":"circle","type":"slot","values":null,"description":"Add an icon to the circle within the component.","default":null,"link":null,"usage":"#icons","code":"<vs-switch color=\\"#7d33ff\\" icon v-model=\\"active6\\">\\n  <template #circle>\\n      <i v-if=\\"active6\\" class='bx bxl-instagram-alt'></i>\\n      <i v-else class='bx bxl-instagram' ></i>\\n  </template>\\n</vs-switch>\\n"}]},"headers":[{"level":2,"title":"Default","slug":"default","link":"#default","children":[]},{"level":2,"title":"Color","slug":"color","link":"#color","children":[]},{"level":2,"title":"Text","slug":"text","link":"#text","children":[]},{"level":2,"title":"Icons","slug":"icons","link":"#icons","children":[]},{"level":2,"title":"Loading","slug":"loading","link":"#loading","children":[]},{"level":2,"title":"Indeterminate","slug":"indeterminate","link":"#indeterminate","children":[]},{"level":2,"title":"Square","slug":"square","link":"#square","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"git":{"createdTime":1720575369000,"updatedTime":1720575369000,"contributors":[{"name":"badspider7","email":"54093230+badspider7@users.noreply.github.com","commits":1}]}}`);export{e as data};