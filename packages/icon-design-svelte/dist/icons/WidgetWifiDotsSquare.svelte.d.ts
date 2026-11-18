import { SvelteComponent } from 'svelte';

export interface WidgetWifiDotsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetWifiDotsSquare extends SvelteComponent<WidgetWifiDotsSquareProps> {}
