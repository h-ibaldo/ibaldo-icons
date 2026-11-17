import { SvelteComponent } from 'svelte';

export interface ChatCheckCirclePointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCirclePointed extends SvelteComponent<ChatCheckCirclePointedProps> {}
