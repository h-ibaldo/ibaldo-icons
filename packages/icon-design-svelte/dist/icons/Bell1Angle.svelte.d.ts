import { SvelteComponent } from 'svelte';

export interface Bell1AngleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1Angle extends SvelteComponent<Bell1AngleProps> {}
