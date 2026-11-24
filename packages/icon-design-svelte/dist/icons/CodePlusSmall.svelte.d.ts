import { SvelteComponent } from 'svelte';

export interface CodePlusSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodePlusSmall extends SvelteComponent<CodePlusSmallProps> {}
