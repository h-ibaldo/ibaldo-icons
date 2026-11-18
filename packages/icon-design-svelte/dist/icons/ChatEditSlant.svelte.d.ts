import { SvelteComponent } from 'svelte';

export interface ChatEditSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEditSlant extends SvelteComponent<ChatEditSlantProps> {}
