import { SvelteComponent } from 'svelte';

export interface SunJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunJagged extends SvelteComponent<SunJaggedProps> {}
