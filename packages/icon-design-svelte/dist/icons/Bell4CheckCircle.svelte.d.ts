import { SvelteComponent } from 'svelte';

export interface Bell4CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4CheckCircle extends SvelteComponent<Bell4CheckCircleProps> {}
