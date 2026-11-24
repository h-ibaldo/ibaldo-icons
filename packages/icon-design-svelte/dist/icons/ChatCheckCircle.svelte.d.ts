import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircle extends SvelteComponent<ChatCheckCircleProps> {}
