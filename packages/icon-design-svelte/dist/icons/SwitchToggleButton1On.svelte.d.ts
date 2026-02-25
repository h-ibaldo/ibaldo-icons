import { SvelteComponent } from 'svelte';

export interface SwitchToggleButton1OnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButton1On extends SvelteComponent<SwitchToggleButton1OnProps> {}
