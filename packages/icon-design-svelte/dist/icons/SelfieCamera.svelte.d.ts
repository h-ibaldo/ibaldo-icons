import { SvelteComponent } from 'svelte';

export interface SelfieCameraProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SelfieCamera extends SvelteComponent<SelfieCameraProps> {}
