import { SvelteComponent } from 'svelte';

export interface AlarmArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmArc extends SvelteComponent<AlarmArcProps> {}
