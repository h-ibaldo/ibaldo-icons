import { SvelteComponent } from 'svelte';

export interface AlarmSnoozeArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmSnoozeArc extends SvelteComponent<AlarmSnoozeArcProps> {}
