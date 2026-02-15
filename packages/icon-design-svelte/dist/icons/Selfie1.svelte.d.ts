import { SvelteComponent } from 'svelte';

export interface Selfie1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie1 extends SvelteComponent<Selfie1Props> {}
