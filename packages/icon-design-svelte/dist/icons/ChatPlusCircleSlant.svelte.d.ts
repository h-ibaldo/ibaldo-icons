import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleSlant extends SvelteComponent<ChatPlusCircleSlantProps> {}
