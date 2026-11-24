import { SvelteComponent } from 'svelte';

export interface AlarmMinusArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmMinusArc extends SvelteComponent<AlarmMinusArcProps> {}
