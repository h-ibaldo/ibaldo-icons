import { SvelteComponent } from 'svelte';

export interface WidgetCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetCircle extends SvelteComponent<WidgetCircleProps> {}
