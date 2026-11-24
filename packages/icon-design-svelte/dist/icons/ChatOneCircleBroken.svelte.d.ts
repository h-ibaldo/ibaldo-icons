import { SvelteComponent } from 'svelte';

export interface ChatOneCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircleBroken extends SvelteComponent<ChatOneCircleBrokenProps> {}
