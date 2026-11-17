import { SvelteComponent } from 'svelte';

export interface ListXBulletsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListXBullets extends SvelteComponent<ListXBulletsProps> {}
