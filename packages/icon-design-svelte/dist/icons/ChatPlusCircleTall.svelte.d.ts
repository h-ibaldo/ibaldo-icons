import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleTall extends SvelteComponent<ChatPlusCircleTallProps> {}
