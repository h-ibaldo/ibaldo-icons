import { SvelteComponent } from 'svelte';

export interface ClockCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockCircleDashed extends SvelteComponent<ClockCircleDashedProps> {}
