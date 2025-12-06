<!-- Code (custom block type) -->
<script lang="ts">
  import type {CustomBlockComponentProps} from '@portabletext/svelte'

  interface Props {
    portableText: CustomBlockComponentProps<{text?: string}>
  }

  // Property custom blocks receive from @portabletext/svelte when rendered
  let {portableText}: Props = $props()
</script>

<pre class="code">{portableText.value.text}</pre>

<style>
  .code {
    padding: 1rem;
    border: 1px solid red;
  }
</style>
