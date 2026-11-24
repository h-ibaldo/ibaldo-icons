import { SvelteComponent } from 'svelte';

export interface LayoutListSymbolsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListSymbols extends SvelteComponent<LayoutListSymbolsProps> {}
