import { SvelteComponent } from 'svelte';

export interface AlarmCheckArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmCheckArc extends SvelteComponent<AlarmCheckArcProps> {}
