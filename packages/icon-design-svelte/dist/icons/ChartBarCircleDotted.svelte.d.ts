import { SvelteComponent } from 'svelte';

export interface ChartBarCircleDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleDotted extends SvelteComponent<ChartBarCircleDottedProps> {}
