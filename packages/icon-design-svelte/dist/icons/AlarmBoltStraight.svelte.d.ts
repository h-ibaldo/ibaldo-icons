import { SvelteComponent } from 'svelte';

export interface AlarmBoltStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBoltStraight extends SvelteComponent<AlarmBoltStraightProps> {}
