import { SvelteComponent } from 'svelte';

export interface Cloud1SmileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Smile extends SvelteComponent<Cloud1SmileProps> {}
