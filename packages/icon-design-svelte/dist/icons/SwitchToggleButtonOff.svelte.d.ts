import { SvelteComponent } from 'svelte';

export interface SwitchToggleButtonOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButtonOff extends SvelteComponent<SwitchToggleButtonOffProps> {}
