import { SvelteComponent } from 'svelte';

export interface TrayStackHeartFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackHeartFlat extends SvelteComponent<TrayStackHeartFlatProps> {}
