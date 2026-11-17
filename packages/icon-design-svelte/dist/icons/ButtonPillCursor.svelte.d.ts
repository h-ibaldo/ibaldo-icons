import { SvelteComponent } from 'svelte';

export interface ButtonPillCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPillCursor extends SvelteComponent<ButtonPillCursorProps> {}
