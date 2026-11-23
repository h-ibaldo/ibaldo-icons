import { SvelteComponent } from 'svelte';

export interface TextJCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextJCircle extends SvelteComponent<TextJCircleProps> {}
