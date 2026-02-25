import { SvelteComponent } from 'svelte';

export interface Selfie2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie2 extends SvelteComponent<Selfie2Props> {}
