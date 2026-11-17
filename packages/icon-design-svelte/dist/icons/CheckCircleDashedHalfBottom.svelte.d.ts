import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedHalfBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedHalfBottom extends SvelteComponent<CheckCircleDashedHalfBottomProps> {}
