import { SvelteComponent } from 'svelte';

export interface ChatStackHashFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHashFacing extends SvelteComponent<ChatStackHashFacingProps> {}
