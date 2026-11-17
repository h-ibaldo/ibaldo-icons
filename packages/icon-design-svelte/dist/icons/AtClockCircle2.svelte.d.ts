import { SvelteComponent } from 'svelte';

export interface AtClockCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClockCircle2 extends SvelteComponent<AtClockCircle2Props> {}
