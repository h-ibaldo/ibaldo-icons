import { SvelteComponent } from 'svelte';

export interface AlarmPieProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPie extends SvelteComponent<AlarmPieProps> {}
