import { SvelteComponent } from 'svelte';

export interface ArrowsFourCircleImprovementProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsFourCircleImprovement extends SvelteComponent<ArrowsFourCircleImprovementProps> {}
