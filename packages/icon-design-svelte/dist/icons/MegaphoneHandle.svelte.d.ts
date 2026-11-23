import { SvelteComponent } from 'svelte';

export interface MegaphoneHandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MegaphoneHandle extends SvelteComponent<MegaphoneHandleProps> {}
