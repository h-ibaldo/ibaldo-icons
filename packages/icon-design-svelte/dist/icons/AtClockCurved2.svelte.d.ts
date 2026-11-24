import { SvelteComponent } from 'svelte';

export interface AtClockCurved2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClockCurved2 extends SvelteComponent<AtClockCurved2Props> {}
