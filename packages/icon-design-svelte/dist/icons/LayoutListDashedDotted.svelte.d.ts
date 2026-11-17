import { SvelteComponent } from 'svelte';

export interface LayoutListDashedDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListDashedDotted extends SvelteComponent<LayoutListDashedDottedProps> {}
