import { SvelteComponent } from 'svelte';

export interface Cloud1X2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1X2 extends SvelteComponent<Cloud1X2Props> {}
