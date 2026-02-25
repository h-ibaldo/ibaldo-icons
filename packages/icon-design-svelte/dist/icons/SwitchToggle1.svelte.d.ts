import { SvelteComponent } from 'svelte';

export interface SwitchToggle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggle1 extends SvelteComponent<SwitchToggle1Props> {}
