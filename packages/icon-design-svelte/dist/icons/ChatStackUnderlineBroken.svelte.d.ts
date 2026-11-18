import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineBroken extends SvelteComponent<ChatStackUnderlineBrokenProps> {}
