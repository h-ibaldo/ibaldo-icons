import { SvelteComponent } from 'svelte';

export interface AlarmMinusStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmMinusStraight extends SvelteComponent<AlarmMinusStraightProps> {}
