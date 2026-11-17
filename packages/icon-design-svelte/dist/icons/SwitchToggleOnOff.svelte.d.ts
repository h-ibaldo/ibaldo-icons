import { SvelteComponent } from 'svelte';

export interface SwitchToggleOnOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleOnOff extends SvelteComponent<SwitchToggleOnOffProps> {}
