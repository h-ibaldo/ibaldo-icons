import { SvelteComponent } from 'svelte';

export interface MenuDescendingWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDescendingWide extends SvelteComponent<MenuDescendingWideProps> {}
