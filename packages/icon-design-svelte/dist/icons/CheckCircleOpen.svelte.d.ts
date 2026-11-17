import { SvelteComponent } from 'svelte';

export interface CheckCircleOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleOpen extends SvelteComponent<CheckCircleOpenProps> {}
