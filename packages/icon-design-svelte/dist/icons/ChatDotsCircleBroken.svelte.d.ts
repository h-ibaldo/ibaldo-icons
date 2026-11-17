import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleBroken extends SvelteComponent<ChatDotsCircleBrokenProps> {}
