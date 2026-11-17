import { SvelteComponent } from 'svelte';

export interface SwitchLeverProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchLever extends SvelteComponent<SwitchLeverProps> {}
