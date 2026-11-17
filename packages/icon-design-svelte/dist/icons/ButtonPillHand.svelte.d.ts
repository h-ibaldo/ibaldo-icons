import { SvelteComponent } from 'svelte';

export interface ButtonPillHandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPillHand extends SvelteComponent<ButtonPillHandProps> {}
