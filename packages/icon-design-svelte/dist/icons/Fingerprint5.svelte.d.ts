import { SvelteComponent } from 'svelte';

export interface Fingerprint5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint5 extends SvelteComponent<Fingerprint5Props> {}
