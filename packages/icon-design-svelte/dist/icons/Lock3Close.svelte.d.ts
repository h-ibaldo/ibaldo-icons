import { SvelteComponent } from 'svelte';

export interface Lock3CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Close extends SvelteComponent<Lock3CloseProps> {}
