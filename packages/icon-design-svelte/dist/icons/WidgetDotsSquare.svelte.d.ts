import { SvelteComponent } from 'svelte';

export interface WidgetDotsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetDotsSquare extends SvelteComponent<WidgetDotsSquareProps> {}
