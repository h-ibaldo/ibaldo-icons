import { SvelteComponent } from 'svelte';

export interface SwitchToggle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggle3 extends SvelteComponent<SwitchToggle3Props> {}
