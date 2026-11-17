import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDouble extends SvelteComponent<ChatCheckDoubleProps> {}
