import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedHalfSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedHalfSmall extends SvelteComponent<CheckCircleDashedHalfSmallProps> {}
