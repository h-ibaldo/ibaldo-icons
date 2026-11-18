import { SvelteComponent } from 'svelte';

export interface AlarmXArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmXArc extends SvelteComponent<AlarmXArcProps> {}
