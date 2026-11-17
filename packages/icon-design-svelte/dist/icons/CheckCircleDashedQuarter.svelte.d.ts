import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedQuarter extends SvelteComponent<CheckCircleDashedQuarterProps> {}
