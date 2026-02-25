import { SvelteComponent } from 'svelte';

export interface Cloud2X1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2X1 extends SvelteComponent<Cloud2X1Props> {}
