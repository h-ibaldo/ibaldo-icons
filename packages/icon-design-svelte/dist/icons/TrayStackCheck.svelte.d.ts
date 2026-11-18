import { SvelteComponent } from 'svelte';

export interface TrayStackCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackCheck extends SvelteComponent<TrayStackCheckProps> {}
