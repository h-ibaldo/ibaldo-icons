import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedLong extends SvelteComponent<CheckCircleDashedLongProps> {}
