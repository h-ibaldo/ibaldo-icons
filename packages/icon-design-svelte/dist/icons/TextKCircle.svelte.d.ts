import { SvelteComponent } from 'svelte';

export interface TextKCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextKCircle extends SvelteComponent<TextKCircleProps> {}
