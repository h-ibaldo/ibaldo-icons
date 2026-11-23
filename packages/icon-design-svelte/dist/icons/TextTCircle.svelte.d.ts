import { SvelteComponent } from 'svelte';

export interface TextTCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextTCircle extends SvelteComponent<TextTCircleProps> {}
