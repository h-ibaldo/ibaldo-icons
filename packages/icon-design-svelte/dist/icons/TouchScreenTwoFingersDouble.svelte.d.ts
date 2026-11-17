import { SvelteComponent } from 'svelte';

export interface TouchScreenTwoFingersDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenTwoFingersDouble extends SvelteComponent<TouchScreenTwoFingersDoubleProps> {}
