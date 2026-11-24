import { SvelteComponent } from 'svelte';

export interface WrenchHandOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchHandOpen extends SvelteComponent<WrenchHandOpenProps> {}
