import { SvelteComponent } from 'svelte';

export interface EyeOffLiddedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeOffLidded extends SvelteComponent<EyeOffLiddedProps> {}
