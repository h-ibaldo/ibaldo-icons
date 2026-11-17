import { SvelteComponent } from 'svelte';

export interface SwitchTwoButtonsToggleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchTwoButtonsToggle extends SvelteComponent<SwitchTwoButtonsToggleProps> {}
