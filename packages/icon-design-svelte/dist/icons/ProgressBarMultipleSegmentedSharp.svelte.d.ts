import { SvelteComponent } from 'svelte';

export interface ProgressBarMultipleSegmentedSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarMultipleSegmentedSharp extends SvelteComponent<ProgressBarMultipleSegmentedSharpProps> {}
