import { SvelteComponent } from 'svelte';

export interface SwitchButtonOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchButtonOff extends SvelteComponent<SwitchButtonOffProps> {}
