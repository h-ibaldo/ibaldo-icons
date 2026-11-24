import { SvelteComponent } from 'svelte';

export interface CodeMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeMinus extends SvelteComponent<CodeMinusProps> {}
