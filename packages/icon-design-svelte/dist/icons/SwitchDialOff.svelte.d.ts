import { SvelteComponent } from 'svelte';

export interface SwitchDialOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialOff extends SvelteComponent<SwitchDialOffProps> {}
