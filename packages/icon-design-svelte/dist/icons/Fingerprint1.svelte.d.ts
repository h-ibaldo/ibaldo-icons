import { SvelteComponent } from 'svelte';

export interface Fingerprint1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint1 extends SvelteComponent<Fingerprint1Props> {}
