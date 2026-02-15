import { SvelteComponent } from 'svelte';

export interface Cloud2Network2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Network2 extends SvelteComponent<Cloud2Network2Props> {}
