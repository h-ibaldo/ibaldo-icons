import { SvelteComponent } from 'svelte';

export interface TrayLinesTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayLinesTall extends SvelteComponent<TrayLinesTallProps> {}
