import { SvelteComponent } from 'svelte';

export interface AlarmPieStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPieStraight extends SvelteComponent<AlarmPieStraightProps> {}
