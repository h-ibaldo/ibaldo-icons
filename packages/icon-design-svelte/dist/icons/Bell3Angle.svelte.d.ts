import { SvelteComponent } from 'svelte';

export interface Bell3AngleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Angle extends SvelteComponent<Bell3AngleProps> {}
