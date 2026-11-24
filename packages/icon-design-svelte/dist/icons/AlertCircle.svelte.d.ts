import { SvelteComponent } from 'svelte';

export interface AlertCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertCircle extends SvelteComponent<AlertCircleProps> {}
