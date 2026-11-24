import { SvelteComponent } from 'svelte';

export interface AlarmPieArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPieArc extends SvelteComponent<AlarmPieArcProps> {}
