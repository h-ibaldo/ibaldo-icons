import { SvelteComponent } from 'svelte';

export interface TabCheckVerifiedCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckVerifiedCircle extends SvelteComponent<TabCheckVerifiedCircleProps> {}
