import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedHalf extends SvelteComponent<CheckCircleDashedHalfProps> {}
