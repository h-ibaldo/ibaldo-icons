import { SvelteComponent } from 'svelte';

export interface CodeCheckSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeCheckSmall extends SvelteComponent<CodeCheckSmallProps> {}
