import { SvelteComponent } from 'svelte';

export interface AtAlertCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtAlertCircle extends SvelteComponent<AtAlertCircleProps> {}
