import { SvelteComponent } from 'svelte';

export interface AlarmPlusStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPlusStraight extends SvelteComponent<AlarmPlusStraightProps> {}
