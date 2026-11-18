import { SvelteComponent } from 'svelte';

export interface TrayLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayLines extends SvelteComponent<TrayLinesProps> {}
