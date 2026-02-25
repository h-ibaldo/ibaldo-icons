import { SvelteComponent } from 'svelte';

export interface Lock2UnlockedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock2UnlockedOpen extends SvelteComponent<Lock2UnlockedOpenProps> {}
