import { SvelteComponent } from 'svelte';

export interface SwitchKnobButton3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchKnobButton3 extends SvelteComponent<SwitchKnobButton3Props> {}
