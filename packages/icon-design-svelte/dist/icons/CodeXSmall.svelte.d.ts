import { SvelteComponent } from 'svelte';

export interface CodeXSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeXSmall extends SvelteComponent<CodeXSmallProps> {}
