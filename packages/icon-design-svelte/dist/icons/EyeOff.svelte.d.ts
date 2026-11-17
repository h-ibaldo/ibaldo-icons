import { SvelteComponent } from 'svelte';

export interface EyeOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeOff extends SvelteComponent<EyeOffProps> {}
