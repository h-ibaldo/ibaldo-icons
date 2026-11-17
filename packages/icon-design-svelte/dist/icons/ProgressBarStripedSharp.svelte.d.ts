import { SvelteComponent } from 'svelte';

export interface ProgressBarStripedSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarStripedSharp extends SvelteComponent<ProgressBarStripedSharpProps> {}
