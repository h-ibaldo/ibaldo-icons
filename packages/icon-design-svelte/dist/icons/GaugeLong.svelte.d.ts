import { SvelteComponent } from 'svelte';

export interface GaugeLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeLong extends SvelteComponent<GaugeLongProps> {}
