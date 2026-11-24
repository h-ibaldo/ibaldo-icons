import { SvelteComponent } from 'svelte';

export interface CardImageCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CardImageCursor extends SvelteComponent<CardImageCursorProps> {}
