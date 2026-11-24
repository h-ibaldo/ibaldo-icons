import { SvelteComponent } from 'svelte';

export interface AlignSquareCenterHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareCenterHorizontal extends SvelteComponent<AlignSquareCenterHorizontalProps> {}
