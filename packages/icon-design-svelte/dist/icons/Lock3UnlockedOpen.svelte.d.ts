import { SvelteComponent } from 'svelte';

export interface Lock3UnlockedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3UnlockedOpen extends SvelteComponent<Lock3UnlockedOpenProps> {}
