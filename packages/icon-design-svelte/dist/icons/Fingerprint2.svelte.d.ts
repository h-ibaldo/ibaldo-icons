import { SvelteComponent } from 'svelte';

export interface Fingerprint2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint2 extends SvelteComponent<Fingerprint2Props> {}
