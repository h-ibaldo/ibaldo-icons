import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleSlant extends SvelteComponent<ChatCheckCircleSlantProps> {}
