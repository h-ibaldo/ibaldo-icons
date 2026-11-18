import { SvelteComponent } from 'svelte';

export interface MoonOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonOff extends SvelteComponent<MoonOffProps> {}
