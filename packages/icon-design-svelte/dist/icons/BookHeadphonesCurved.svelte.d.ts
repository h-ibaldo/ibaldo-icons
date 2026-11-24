import { SvelteComponent } from 'svelte';

export interface BookHeadphonesCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookHeadphonesCurved extends SvelteComponent<BookHeadphonesCurvedProps> {}
