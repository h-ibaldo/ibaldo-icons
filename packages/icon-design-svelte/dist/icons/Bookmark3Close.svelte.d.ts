import { SvelteComponent } from 'svelte';

export interface Bookmark3CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Close extends SvelteComponent<Bookmark3CloseProps> {}
