import { SvelteComponent } from 'svelte';

export interface ChatStackDotsFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsFacing extends SvelteComponent<ChatStackDotsFacingProps> {}
