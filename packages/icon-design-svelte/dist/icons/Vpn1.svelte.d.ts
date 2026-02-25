import { SvelteComponent } from 'svelte';

export interface Vpn1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Vpn1 extends SvelteComponent<Vpn1Props> {}
