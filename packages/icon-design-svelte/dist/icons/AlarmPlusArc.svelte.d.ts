import { SvelteComponent } from 'svelte';

export interface AlarmPlusArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPlusArc extends SvelteComponent<AlarmPlusArcProps> {}
