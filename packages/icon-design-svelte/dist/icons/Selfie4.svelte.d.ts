import { SvelteComponent } from 'svelte';

export interface Selfie4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie4 extends SvelteComponent<Selfie4Props> {}
