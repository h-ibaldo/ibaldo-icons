import { SvelteComponent } from 'svelte';

export interface AlignSquareCenterVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareCenterVertical extends SvelteComponent<AlignSquareCenterVerticalProps> {}
