import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleTall extends SvelteComponent<ChatCheckCircleTallProps> {}
