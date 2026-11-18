import { SvelteComponent } from 'svelte';

export interface CardTextCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CardTextCursor extends SvelteComponent<CardTextCursorProps> {}
