import { SvelteComponent } from 'svelte';

export interface SwitchButtonOn1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchButtonOn1 extends SvelteComponent<SwitchButtonOn1Props> {}
