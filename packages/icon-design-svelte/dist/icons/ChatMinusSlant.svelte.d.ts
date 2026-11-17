import { SvelteComponent } from 'svelte';

export interface ChatMinusSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusSlant extends SvelteComponent<ChatMinusSlantProps> {}
