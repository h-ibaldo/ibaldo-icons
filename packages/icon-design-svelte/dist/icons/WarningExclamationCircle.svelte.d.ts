import { SvelteComponent } from 'svelte';

export interface WarningExclamationCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationCircle extends SvelteComponent<WarningExclamationCircleProps> {}
