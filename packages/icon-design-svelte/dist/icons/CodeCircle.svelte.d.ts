import { SvelteComponent } from 'svelte';

export interface CodeCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeCircle extends SvelteComponent<CodeCircleProps> {}
