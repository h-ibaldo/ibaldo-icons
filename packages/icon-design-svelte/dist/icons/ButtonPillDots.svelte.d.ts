import { SvelteComponent } from 'svelte';

export interface ButtonPillDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPillDots extends SvelteComponent<ButtonPillDotsProps> {}
