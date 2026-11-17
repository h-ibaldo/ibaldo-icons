import { SvelteComponent } from 'svelte';

export interface SwitchToggleButtonOnDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButtonOnDots extends SvelteComponent<SwitchToggleButtonOnDotsProps> {}
