import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleSlant extends SvelteComponent<ChatCheckDoubleSlantProps> {}
