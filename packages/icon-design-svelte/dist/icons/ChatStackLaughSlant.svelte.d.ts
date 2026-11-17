import { SvelteComponent } from 'svelte';

export interface ChatStackLaughSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLaughSlant extends SvelteComponent<ChatStackLaughSlantProps> {}
