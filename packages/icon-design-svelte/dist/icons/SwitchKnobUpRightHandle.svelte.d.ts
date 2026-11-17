import { SvelteComponent } from 'svelte';

export interface SwitchKnobUpRightHandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchKnobUpRightHandle extends SvelteComponent<SwitchKnobUpRightHandleProps> {}
