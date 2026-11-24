import { SvelteComponent } from 'svelte';

export interface CompassPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassPlus extends SvelteComponent<CompassPlusProps> {}
