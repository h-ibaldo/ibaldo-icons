import { SvelteComponent } from 'svelte';

export interface Fingerprint3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint3 extends SvelteComponent<Fingerprint3Props> {}
