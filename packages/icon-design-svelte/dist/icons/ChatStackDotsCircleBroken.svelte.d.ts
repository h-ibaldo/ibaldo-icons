import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircleBroken extends SvelteComponent<ChatStackDotsCircleBrokenProps> {}
