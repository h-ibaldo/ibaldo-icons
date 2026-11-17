import { SvelteComponent } from 'svelte';

export interface SwitchToggleButtonOnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButtonOn extends SvelteComponent<SwitchToggleButtonOnProps> {}
