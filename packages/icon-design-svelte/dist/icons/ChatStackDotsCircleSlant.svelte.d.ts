import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircleSlant extends SvelteComponent<ChatStackDotsCircleSlantProps> {}
