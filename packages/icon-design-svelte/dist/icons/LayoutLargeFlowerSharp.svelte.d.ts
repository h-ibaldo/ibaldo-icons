import { SvelteComponent } from 'svelte';

export interface LayoutLargeFlowerSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutLargeFlowerSharp extends SvelteComponent<LayoutLargeFlowerSharpProps> {}
