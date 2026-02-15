import { SvelteComponent } from 'svelte';

export interface Cloud2Minus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Minus2 extends SvelteComponent<Cloud2Minus2Props> {}
