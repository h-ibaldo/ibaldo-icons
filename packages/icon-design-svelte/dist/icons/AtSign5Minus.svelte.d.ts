import { SvelteComponent } from 'svelte';

export interface AtSign5MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Minus extends SvelteComponent<AtSign5MinusProps> {}
