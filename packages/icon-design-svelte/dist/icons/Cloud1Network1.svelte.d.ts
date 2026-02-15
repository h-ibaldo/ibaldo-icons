import { SvelteComponent } from 'svelte';

export interface Cloud1Network1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Network1 extends SvelteComponent<Cloud1Network1Props> {}
