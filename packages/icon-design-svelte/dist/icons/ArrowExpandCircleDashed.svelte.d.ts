import { SvelteComponent } from 'svelte';

export interface ArrowExpandCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowExpandCircleDashed extends SvelteComponent<ArrowExpandCircleDashedProps> {}
