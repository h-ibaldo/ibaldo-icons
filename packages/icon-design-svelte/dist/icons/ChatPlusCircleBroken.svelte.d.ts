import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleBroken extends SvelteComponent<ChatPlusCircleBrokenProps> {}
