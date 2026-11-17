import { SvelteComponent } from 'svelte';

export interface AlertCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertCircleSmall extends SvelteComponent<AlertCircleSmallProps> {}
