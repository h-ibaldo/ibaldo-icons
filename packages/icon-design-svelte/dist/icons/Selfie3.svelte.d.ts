import { SvelteComponent } from 'svelte';

export interface Selfie3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie3 extends SvelteComponent<Selfie3Props> {}
