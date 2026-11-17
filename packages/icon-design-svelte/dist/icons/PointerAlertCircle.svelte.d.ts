import { SvelteComponent } from 'svelte';

export interface PointerAlertCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerAlertCircle extends SvelteComponent<PointerAlertCircleProps> {}
