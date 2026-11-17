import { SvelteComponent } from 'svelte';

export interface CardImageCursorSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CardImageCursorSmall extends SvelteComponent<CardImageCursorSmallProps> {}
