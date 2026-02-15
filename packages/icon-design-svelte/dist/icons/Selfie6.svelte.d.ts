import { SvelteComponent } from 'svelte';

export interface Selfie6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie6 extends SvelteComponent<Selfie6Props> {}
