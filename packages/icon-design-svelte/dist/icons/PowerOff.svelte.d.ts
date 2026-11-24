import { SvelteComponent } from 'svelte';

export interface PowerOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PowerOff extends SvelteComponent<PowerOffProps> {}
