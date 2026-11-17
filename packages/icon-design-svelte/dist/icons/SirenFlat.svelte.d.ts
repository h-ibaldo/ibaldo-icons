import { SvelteComponent } from 'svelte';

export interface SirenFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SirenFlat extends SvelteComponent<SirenFlatProps> {}
