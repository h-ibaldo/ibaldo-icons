import { SvelteComponent } from 'svelte';

export interface AtSign3MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign3Minus extends SvelteComponent<AtSign3MinusProps> {}
