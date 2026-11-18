import { SvelteComponent } from 'svelte';

export interface ChatMinusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusTall extends SvelteComponent<ChatMinusTallProps> {}
