import { SvelteComponent } from 'svelte';

export interface Lock4UnlockedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4UnlockedOpen extends SvelteComponent<Lock4UnlockedOpenProps> {}
