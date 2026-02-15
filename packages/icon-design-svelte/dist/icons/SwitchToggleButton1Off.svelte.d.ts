import { SvelteComponent } from 'svelte';

export interface SwitchToggleButton1OffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButton1Off extends SvelteComponent<SwitchToggleButton1OffProps> {}
