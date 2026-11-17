import { SvelteComponent } from 'svelte';

export interface WrenchDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchDouble extends SvelteComponent<WrenchDoubleProps> {}
