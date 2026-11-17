import { SvelteComponent } from 'svelte';

export interface Bell6AngleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6Angle extends SvelteComponent<Bell6AngleProps> {}
