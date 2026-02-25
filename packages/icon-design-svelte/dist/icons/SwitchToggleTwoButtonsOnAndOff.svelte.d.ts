import { SvelteComponent } from 'svelte';

export interface SwitchToggleTwoButtonsOnAndOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleTwoButtonsOnAndOff extends SvelteComponent<SwitchToggleTwoButtonsOnAndOffProps> {}
