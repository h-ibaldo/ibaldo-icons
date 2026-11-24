import { SvelteComponent } from 'svelte';

export interface TrayStackFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackFlat extends SvelteComponent<TrayStackFlatProps> {}
