import { SvelteComponent } from 'svelte';

export interface NotApproximateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotApproximate extends SvelteComponent<NotApproximateProps> {}
