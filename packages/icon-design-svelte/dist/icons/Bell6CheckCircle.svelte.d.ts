import { SvelteComponent } from 'svelte';

export interface Bell6CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6CheckCircle extends SvelteComponent<Bell6CheckCircleProps> {}
