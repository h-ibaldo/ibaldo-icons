import { SvelteComponent } from 'svelte';

export interface TabCheckCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCircleSharp extends SvelteComponent<TabCheckCircleSharpProps> {}
