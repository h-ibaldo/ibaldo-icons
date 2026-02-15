import { SvelteComponent } from 'svelte';

export interface Selfie5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie5 extends SvelteComponent<Selfie5Props> {}
