import { SvelteComponent } from 'svelte';

export interface WidgetDelete1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetDelete1 extends SvelteComponent<WidgetDelete1Props> {}
