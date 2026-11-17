import { SvelteComponent } from 'svelte';

export interface AtSign4MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Minus extends SvelteComponent<AtSign4MinusProps> {}
