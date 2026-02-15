import { SvelteComponent } from 'svelte';

export interface Lock5UnlockedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5UnlockedOpen extends SvelteComponent<Lock5UnlockedOpenProps> {}
