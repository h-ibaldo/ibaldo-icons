import { SvelteComponent } from 'svelte';

export interface AlarmSnoozeStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmSnoozeStraight extends SvelteComponent<AlarmSnoozeStraightProps> {}
