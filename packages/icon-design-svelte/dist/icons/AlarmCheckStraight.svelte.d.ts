import { SvelteComponent } from 'svelte';

export interface AlarmCheckStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmCheckStraight extends SvelteComponent<AlarmCheckStraightProps> {}
