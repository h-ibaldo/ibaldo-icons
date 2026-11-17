import { SvelteComponent } from 'svelte';

export interface Bell4AngleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Angle extends SvelteComponent<Bell4AngleProps> {}
