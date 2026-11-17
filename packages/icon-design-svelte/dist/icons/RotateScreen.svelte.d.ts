import { SvelteComponent } from 'svelte';

export interface RotateScreenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreen extends SvelteComponent<RotateScreenProps> {}
