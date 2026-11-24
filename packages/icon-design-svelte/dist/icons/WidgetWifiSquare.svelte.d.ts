import { SvelteComponent } from 'svelte';

export interface WidgetWifiSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetWifiSquare extends SvelteComponent<WidgetWifiSquareProps> {}
