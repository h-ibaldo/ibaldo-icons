import { SvelteComponent } from 'svelte';

export interface GaugeLongTicksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeLongTicks extends SvelteComponent<GaugeLongTicksProps> {}
