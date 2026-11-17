import { SvelteComponent } from 'svelte';

export interface CodeCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeCheck extends SvelteComponent<CodeCheckProps> {}
