import { SvelteComponent } from 'svelte';

export interface Cloud2Network1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Network1 extends SvelteComponent<Cloud2Network1Props> {}
