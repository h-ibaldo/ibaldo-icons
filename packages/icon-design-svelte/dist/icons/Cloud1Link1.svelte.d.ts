import { SvelteComponent } from 'svelte';

export interface Cloud1Link1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Link1 extends SvelteComponent<Cloud1Link1Props> {}
