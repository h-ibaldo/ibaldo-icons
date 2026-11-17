import { SvelteComponent } from 'svelte';

export interface Bell5AngleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Angle extends SvelteComponent<Bell5AngleProps> {}
