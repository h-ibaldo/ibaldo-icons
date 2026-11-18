import { SvelteComponent } from 'svelte';

export interface ChatStackMinusFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusFacing extends SvelteComponent<ChatStackMinusFacingProps> {}
