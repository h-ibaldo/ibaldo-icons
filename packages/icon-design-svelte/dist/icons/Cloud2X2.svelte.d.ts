import { SvelteComponent } from 'svelte';

export interface Cloud2X2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2X2 extends SvelteComponent<Cloud2X2Props> {}
