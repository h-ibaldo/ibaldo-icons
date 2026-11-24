import { SvelteComponent } from 'svelte';

export interface ChatStackMinusLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusLayered extends SvelteComponent<ChatStackMinusLayeredProps> {}
