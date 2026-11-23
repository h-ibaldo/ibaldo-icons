import { SvelteComponent } from 'svelte';

export interface PencilSparklesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilSparkles extends SvelteComponent<PencilSparklesProps> {}
