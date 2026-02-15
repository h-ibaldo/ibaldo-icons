import { SvelteComponent } from 'svelte';

export interface ClockNumberThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockNumberThree extends SvelteComponent<ClockNumberThreeProps> {}
