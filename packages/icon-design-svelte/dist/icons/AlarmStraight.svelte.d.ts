import { SvelteComponent } from 'svelte';

export interface AlarmStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmStraight extends SvelteComponent<AlarmStraightProps> {}
