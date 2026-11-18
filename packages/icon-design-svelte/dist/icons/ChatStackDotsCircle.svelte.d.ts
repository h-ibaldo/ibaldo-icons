import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircle extends SvelteComponent<ChatStackDotsCircleProps> {}
