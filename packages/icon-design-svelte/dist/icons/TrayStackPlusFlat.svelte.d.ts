import { SvelteComponent } from 'svelte';

export interface TrayStackPlusFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackPlusFlat extends SvelteComponent<TrayStackPlusFlatProps> {}
