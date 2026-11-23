import { SvelteComponent } from 'svelte';

export interface WandSparklesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WandSparkles extends SvelteComponent<WandSparklesProps> {}
