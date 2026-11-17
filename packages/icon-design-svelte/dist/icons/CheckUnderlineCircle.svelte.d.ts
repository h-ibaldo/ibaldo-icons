import { SvelteComponent } from 'svelte';

export interface CheckUnderlineCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckUnderlineCircle extends SvelteComponent<CheckUnderlineCircleProps> {}
