import { SvelteComponent } from 'svelte';

export interface TrayStackPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackPlus extends SvelteComponent<TrayStackPlusProps> {}
