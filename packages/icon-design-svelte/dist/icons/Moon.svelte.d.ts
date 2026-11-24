import { SvelteComponent } from 'svelte';

export interface MoonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Moon extends SvelteComponent<MoonProps> {}
