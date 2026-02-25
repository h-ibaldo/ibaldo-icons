import { SvelteComponent } from 'svelte';

export interface Cloud1Music2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Music2 extends SvelteComponent<Cloud1Music2Props> {}
