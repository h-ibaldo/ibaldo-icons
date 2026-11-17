import { SvelteComponent } from 'svelte';

export interface ProgressBarMultipleDottedSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarMultipleDottedSharp extends SvelteComponent<ProgressBarMultipleDottedSharpProps> {}
