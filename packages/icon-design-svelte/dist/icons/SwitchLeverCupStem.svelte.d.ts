import { SvelteComponent } from 'svelte';

export interface SwitchLeverCupStemProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchLeverCupStem extends SvelteComponent<SwitchLeverCupStemProps> {}
