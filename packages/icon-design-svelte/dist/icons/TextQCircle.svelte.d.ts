import { SvelteComponent } from 'svelte';

export interface TextQCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextQCircle extends SvelteComponent<TextQCircleProps> {}
