import { SvelteComponent } from 'svelte';

export interface CodeMinusSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeMinusSmall extends SvelteComponent<CodeMinusSmallProps> {}
