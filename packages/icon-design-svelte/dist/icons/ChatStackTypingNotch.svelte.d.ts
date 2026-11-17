import { SvelteComponent } from 'svelte';

export interface ChatStackTypingNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingNotch extends SvelteComponent<ChatStackTypingNotchProps> {}
