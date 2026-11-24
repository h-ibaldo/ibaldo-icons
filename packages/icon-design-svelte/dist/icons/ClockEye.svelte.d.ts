import { SvelteComponent } from 'svelte';

export interface ClockEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockEye extends SvelteComponent<ClockEyeProps> {}
