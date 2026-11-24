import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircle extends SvelteComponent<ChatPlusCircleProps> {}
