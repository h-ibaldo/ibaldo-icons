import { SvelteComponent } from 'svelte';

export interface RotatedSquareAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotatedSquareAlert extends SvelteComponent<RotatedSquareAlertProps> {}
