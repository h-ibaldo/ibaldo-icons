import { SvelteComponent } from 'svelte';

export interface Fingerprint7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint7 extends SvelteComponent<Fingerprint7Props> {}
