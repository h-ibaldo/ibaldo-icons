import { SvelteComponent } from 'svelte';

export interface ChatUnderlineBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineBroken extends SvelteComponent<ChatUnderlineBrokenProps> {}
