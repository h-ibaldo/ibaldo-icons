import { SvelteComponent } from 'svelte';

export interface TabMinusCenterSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusCenterSharp extends SvelteComponent<TabMinusCenterSharpProps> {}
