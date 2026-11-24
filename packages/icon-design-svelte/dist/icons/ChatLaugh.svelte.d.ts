import { SvelteComponent } from 'svelte';

export interface ChatLaughProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLaugh extends SvelteComponent<ChatLaughProps> {}
