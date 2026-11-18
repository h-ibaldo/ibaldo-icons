import { SvelteComponent } from 'svelte';

export interface ListBulletsDotsRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListBulletsDotsRight extends SvelteComponent<ListBulletsDotsRightProps> {}
