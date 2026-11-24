import { SvelteComponent } from 'svelte';

export interface HeadphonesXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeadphonesX extends SvelteComponent<HeadphonesXProps> {}
