import { SvelteComponent } from 'svelte';

export interface AlarmBoltArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBoltArc extends SvelteComponent<AlarmBoltArcProps> {}
