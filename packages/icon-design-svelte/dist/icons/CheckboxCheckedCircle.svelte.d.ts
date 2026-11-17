import { SvelteComponent } from 'svelte';

export interface CheckboxCheckedCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCheckedCircle extends SvelteComponent<CheckboxCheckedCircleProps> {}
