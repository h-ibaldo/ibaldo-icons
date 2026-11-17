import { SvelteComponent } from 'svelte';

export interface BadgeCheckPetalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckPetal extends SvelteComponent<BadgeCheckPetalProps> {}
