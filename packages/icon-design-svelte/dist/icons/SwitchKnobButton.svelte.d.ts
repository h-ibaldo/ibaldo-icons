import { SvelteComponent } from 'svelte';

export interface SwitchKnobButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchKnobButton extends SvelteComponent<SwitchKnobButtonProps> {}
