import { SvelteComponent } from 'svelte';

export interface Bell2CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2CheckCircle extends SvelteComponent<Bell2CheckCircleProps> {}
