import { SvelteComponent } from 'svelte';

export interface Fingerprint4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint4 extends SvelteComponent<Fingerprint4Props> {}
