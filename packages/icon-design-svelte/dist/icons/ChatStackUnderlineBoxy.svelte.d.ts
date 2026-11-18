import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineBoxy extends SvelteComponent<ChatStackUnderlineBoxyProps> {}
