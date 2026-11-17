import { SvelteComponent } from 'svelte';

export interface EyeConeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeCone extends SvelteComponent<EyeConeProps> {}
