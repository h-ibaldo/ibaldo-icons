import { SvelteComponent } from 'svelte';

export interface PointerFieldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerField extends SvelteComponent<PointerFieldProps> {}
