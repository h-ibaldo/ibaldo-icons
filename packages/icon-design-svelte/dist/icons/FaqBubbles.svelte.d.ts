import { SvelteComponent } from 'svelte';

export interface FaqBubblesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaqBubbles extends SvelteComponent<FaqBubblesProps> {}
