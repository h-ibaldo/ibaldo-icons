import { SvelteComponent } from 'svelte';

export interface TabPlusCenterSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCenterSharp extends SvelteComponent<TabPlusCenterSharpProps> {}
