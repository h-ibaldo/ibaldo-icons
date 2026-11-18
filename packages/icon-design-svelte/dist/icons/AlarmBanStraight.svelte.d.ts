import { SvelteComponent } from 'svelte';

export interface AlarmBanStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBanStraight extends SvelteComponent<AlarmBanStraightProps> {}
