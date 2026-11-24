import { SvelteComponent } from 'svelte';

export interface ChatXDoubleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleSlant extends SvelteComponent<ChatXDoubleSlantProps> {}
