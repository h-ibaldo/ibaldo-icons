import { SvelteComponent } from 'svelte';

export interface SwitchLeverCupProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchLeverCup extends SvelteComponent<SwitchLeverCupProps> {}
