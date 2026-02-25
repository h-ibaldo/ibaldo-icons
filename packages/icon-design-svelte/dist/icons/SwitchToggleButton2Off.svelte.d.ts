import { SvelteComponent } from 'svelte';

export interface SwitchToggleButton2OffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButton2Off extends SvelteComponent<SwitchToggleButton2OffProps> {}
