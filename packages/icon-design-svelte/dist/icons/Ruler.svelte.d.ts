import { SvelteComponent } from 'svelte';

export interface RulerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Ruler extends SvelteComponent<RulerProps> {}
