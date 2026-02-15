import { SvelteComponent } from 'svelte';

export interface Cloud1Link2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Link2 extends SvelteComponent<Cloud1Link2Props> {}
