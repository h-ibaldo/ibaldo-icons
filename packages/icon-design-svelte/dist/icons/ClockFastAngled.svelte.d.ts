import { SvelteComponent } from 'svelte';

export interface ClockFastAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockFastAngled extends SvelteComponent<ClockFastAngledProps> {}
