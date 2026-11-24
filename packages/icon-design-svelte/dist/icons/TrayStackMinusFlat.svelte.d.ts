import { SvelteComponent } from 'svelte';

export interface TrayStackMinusFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackMinusFlat extends SvelteComponent<TrayStackMinusFlatProps> {}
