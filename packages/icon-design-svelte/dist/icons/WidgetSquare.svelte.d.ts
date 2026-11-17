import { SvelteComponent } from 'svelte';

export interface WidgetSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetSquare extends SvelteComponent<WidgetSquareProps> {}
