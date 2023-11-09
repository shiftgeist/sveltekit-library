<script lang="ts">
  export let type: HTMLButtonElement['type'] = 'button'
</script>

<button
  class="rounded-full text-xl border-cyan border-3 bg-dark text-white px-4 py-3"
  on:click
  {type}
>
  <slot />
</button>
