import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleCornerSlant extends SvelteComponent<ChatCheckDoubleCornerSlantProps> {}
