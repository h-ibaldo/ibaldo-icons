import { SvelteComponent } from 'svelte';

export interface ProgressBarDottedSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarDottedSharp extends SvelteComponent<ProgressBarDottedSharpProps> {}
