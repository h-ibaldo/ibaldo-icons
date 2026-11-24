import { SvelteComponent } from 'svelte';

export interface WidgetDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetDotsCircle extends SvelteComponent<WidgetDotsCircleProps> {}
