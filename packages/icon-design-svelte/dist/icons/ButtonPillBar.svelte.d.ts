import { SvelteComponent } from 'svelte';

export interface ButtonPillBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPillBar extends SvelteComponent<ButtonPillBarProps> {}
