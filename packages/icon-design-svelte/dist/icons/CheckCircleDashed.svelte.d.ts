import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashed extends SvelteComponent<CheckCircleDashedProps> {}
