import { SvelteComponent } from 'svelte';

export interface WidgetXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetX extends SvelteComponent<WidgetXProps> {}
