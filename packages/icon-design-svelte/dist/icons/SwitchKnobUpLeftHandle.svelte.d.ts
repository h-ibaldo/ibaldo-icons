import { SvelteComponent } from 'svelte';

export interface SwitchKnobUpLeftHandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchKnobUpLeftHandle extends SvelteComponent<SwitchKnobUpLeftHandleProps> {}
