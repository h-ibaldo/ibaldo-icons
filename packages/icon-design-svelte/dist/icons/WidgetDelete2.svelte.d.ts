import { SvelteComponent } from 'svelte';

export interface WidgetDelete2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetDelete2 extends SvelteComponent<WidgetDelete2Props> {}
