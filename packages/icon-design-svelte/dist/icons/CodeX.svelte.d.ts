import { SvelteComponent } from 'svelte';

export interface CodeXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeX extends SvelteComponent<CodeXProps> {}
