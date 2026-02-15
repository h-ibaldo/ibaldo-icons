import { SvelteComponent } from 'svelte';

export interface CheckboxDropAddCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxDropAddCircle extends SvelteComponent<CheckboxDropAddCircleProps> {}
