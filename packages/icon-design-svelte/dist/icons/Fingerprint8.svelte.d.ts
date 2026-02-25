import { SvelteComponent } from 'svelte';

export interface Fingerprint8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint8 extends SvelteComponent<Fingerprint8Props> {}
