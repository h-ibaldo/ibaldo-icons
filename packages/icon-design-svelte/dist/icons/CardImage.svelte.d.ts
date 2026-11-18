import { SvelteComponent } from 'svelte';

export interface CardImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CardImage extends SvelteComponent<CardImageProps> {}
