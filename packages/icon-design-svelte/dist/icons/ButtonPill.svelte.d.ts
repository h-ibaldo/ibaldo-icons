import { SvelteComponent } from 'svelte';

export interface ButtonPillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPill extends SvelteComponent<ButtonPillProps> {}
