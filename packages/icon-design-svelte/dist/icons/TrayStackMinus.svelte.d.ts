import { SvelteComponent } from 'svelte';

export interface TrayStackMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackMinus extends SvelteComponent<TrayStackMinusProps> {}
