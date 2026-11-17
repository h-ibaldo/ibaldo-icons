import { SvelteComponent } from 'svelte';

export interface TabCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCircle extends SvelteComponent<TabCheckCircleProps> {}
