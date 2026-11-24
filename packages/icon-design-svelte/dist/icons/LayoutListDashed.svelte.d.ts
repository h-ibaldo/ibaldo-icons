import { SvelteComponent } from 'svelte';

export interface LayoutListDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListDashed extends SvelteComponent<LayoutListDashedProps> {}
