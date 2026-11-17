import { SvelteComponent } from 'svelte';

export interface ChatXDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDouble extends SvelteComponent<ChatXDoubleProps> {}
