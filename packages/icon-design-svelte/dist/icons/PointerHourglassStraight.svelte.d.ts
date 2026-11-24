import { SvelteComponent } from 'svelte';

export interface PointerHourglassStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerHourglassStraight extends SvelteComponent<PointerHourglassStraightProps> {}
