import { SvelteComponent } from 'svelte';

export interface AlarmAlertStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmAlertStraight extends SvelteComponent<AlarmAlertStraightProps> {}
