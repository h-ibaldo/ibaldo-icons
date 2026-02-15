import { SvelteComponent } from 'svelte';

export interface ClockViewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockView extends SvelteComponent<ClockViewProps> {}
