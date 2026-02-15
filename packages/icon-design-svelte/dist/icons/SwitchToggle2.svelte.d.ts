import { SvelteComponent } from 'svelte';

export interface SwitchToggle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggle2 extends SvelteComponent<SwitchToggle2Props> {}
