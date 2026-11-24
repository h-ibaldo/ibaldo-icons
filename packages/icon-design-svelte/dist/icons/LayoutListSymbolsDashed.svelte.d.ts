import { SvelteComponent } from 'svelte';

export interface LayoutListSymbolsDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListSymbolsDashed extends SvelteComponent<LayoutListSymbolsDashedProps> {}
