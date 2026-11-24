import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleBroken extends SvelteComponent<ChatStackOneCircleBrokenProps> {}
