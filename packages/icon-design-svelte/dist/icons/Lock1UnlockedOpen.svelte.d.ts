import { SvelteComponent } from 'svelte';

export interface Lock1UnlockedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock1UnlockedOpen extends SvelteComponent<Lock1UnlockedOpenProps> {}
