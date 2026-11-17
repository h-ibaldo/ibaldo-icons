import { SvelteComponent } from 'svelte';

export interface TouchScreenTwoFingersSingleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenTwoFingersSingle extends SvelteComponent<TouchScreenTwoFingersSingleProps> {}
