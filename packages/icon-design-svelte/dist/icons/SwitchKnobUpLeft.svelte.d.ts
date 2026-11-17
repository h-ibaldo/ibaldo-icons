import { SvelteComponent } from 'svelte';

export interface SwitchKnobUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchKnobUpLeft extends SvelteComponent<SwitchKnobUpLeftProps> {}
