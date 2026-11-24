import { SvelteComponent } from 'svelte';

export interface ProgressBarSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarSharp extends SvelteComponent<ProgressBarSharpProps> {}
