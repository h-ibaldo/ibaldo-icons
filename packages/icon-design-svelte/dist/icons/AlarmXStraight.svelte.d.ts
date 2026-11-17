import { SvelteComponent } from 'svelte';

export interface AlarmXStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmXStraight extends SvelteComponent<AlarmXStraightProps> {}
