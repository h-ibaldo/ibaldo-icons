import { SvelteComponent } from 'svelte';

export interface TrayStackXFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackXFlat extends SvelteComponent<TrayStackXFlatProps> {}
