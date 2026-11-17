import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedHalfLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedHalfLong extends SvelteComponent<CheckCircleDashedHalfLongProps> {}
