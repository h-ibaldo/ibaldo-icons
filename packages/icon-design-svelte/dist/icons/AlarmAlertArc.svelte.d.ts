import { SvelteComponent } from 'svelte';

export interface AlarmAlertArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmAlertArc extends SvelteComponent<AlarmAlertArcProps> {}
