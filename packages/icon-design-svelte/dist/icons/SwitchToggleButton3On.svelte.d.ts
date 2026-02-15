import { SvelteComponent } from 'svelte';

export interface SwitchToggleButton3OnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButton3On extends SvelteComponent<SwitchToggleButton3OnProps> {}
