import { SvelteComponent } from 'svelte';

export interface CodeSlashSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeSlashSmall extends SvelteComponent<CodeSlashSmallProps> {}
