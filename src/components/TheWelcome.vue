<script setup>
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md');
</script>

<template>
  <div class="min-h-screen p-4 space-y-6 text-gray-800">
    <!-- Documentation -->
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon class="w-10 h-10 text-blue-500" />
      </template>
      <template #heading>
        <h2 class="text-2xl font-bold text-blue-700">Documentation</h2>
      </template>

      <p>
        Vue’s
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-blue-500 underline"
          >official documentation</a
        >
        provides you with all information you need to get started.
      </p>
    </WelcomeItem>

    <!-- Tooling -->
    <WelcomeItem>
      <template #icon>
        <ToolingIcon class="w-10 h-10 text-purple-500" />
      </template>
      <template #heading>
        <h2 class="text-2xl font-bold text-purple-700">Tooling</h2>
      </template>

      <p>
        This project is served and bundled with
        <a
          href="https://vite.dev/guide/features.html"
          target="_blank"
          rel="noopener"
          class="text-purple-500 underline"
          >Vite</a
        >.
        The recommended IDE setup is
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener"
          class="text-purple-500 underline"
          >VSCode</a
        >
        + 
        <a
          href="https://github.com/johnsoncodehk/volar"
          target="_blank"
          rel="noopener"
          class="text-purple-500 underline"
          >Volar</a
        >.
      </p>
    </WelcomeItem>

    <!-- Ecosystem -->
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon class="w-10 h-10 text-green-500" />
      </template>
      <template #heading>
        <h2 class="text-2xl font-bold text-green-700">Ecosystem</h2>
      </template>

      <p>
        Get official tools and libraries for your project:
        <a
          href="https://pinia.vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-green-500 underline"
          >Pinia</a
        >,
        <a
          href="https://router.vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-green-500 underline"
          >Vue Router</a
        >.
      </p>
    </WelcomeItem>

    <!-- Community -->
    <WelcomeItem>
      <template #icon>
        <CommunityIcon class="w-10 h-10 text-yellow-500" />
      </template>
      <template #heading>
        <h2 class="text-2xl font-bold text-yellow-700">Community</h2>
      </template>

      <p>
        Got stuck? Ask your question on
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
          class="text-yellow-500 underline"
          >Vue Land</a
        >.
      </p>
    </WelcomeItem>

    <!-- Support -->
    <WelcomeItem>
      <template #icon>
        <SupportIcon class="w-10 h-10 text-red-500" />
      </template>
      <template #heading>
        <h2 class="text-2xl font-bold text-red-700">Support Vue</h2>
      </template>

      <p>
        As an independent project, Vue relies on community backing for its
        sustainability. You can help us by
        <a
          href="https://vuejs.org/sponsor/"
          target="_blank"
          rel="noopener"
          class="text-red-500 underline"
          >becoming a sponsor</a
        >.
      </p>
    </WelcomeItem>
  </div>
</template>
