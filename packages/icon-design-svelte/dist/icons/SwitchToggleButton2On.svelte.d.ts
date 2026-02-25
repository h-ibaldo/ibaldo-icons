import { SvelteComponent } from 'svelte';

export interface SwitchToggleButton2OnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButton2On extends SvelteComponent<SwitchToggleButton2OnProps> {}
