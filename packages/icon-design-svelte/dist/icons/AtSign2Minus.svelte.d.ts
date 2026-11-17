import { SvelteComponent } from 'svelte';

export interface AtSign2MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Minus extends SvelteComponent<AtSign2MinusProps> {}
