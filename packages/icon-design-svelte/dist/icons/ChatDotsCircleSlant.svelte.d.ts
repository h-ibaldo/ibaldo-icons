import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleSlant extends SvelteComponent<ChatDotsCircleSlantProps> {}
