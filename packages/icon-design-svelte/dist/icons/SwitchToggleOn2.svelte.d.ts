import { SvelteComponent } from 'svelte';

export interface SwitchToggleOn2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleOn2 extends SvelteComponent<SwitchToggleOn2Props> {}
