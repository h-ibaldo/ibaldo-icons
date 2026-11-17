import { SvelteComponent } from 'svelte';

export interface CheckboxCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircle extends SvelteComponent<CheckboxCircleProps> {}
