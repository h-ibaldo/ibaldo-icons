import { SvelteComponent } from 'svelte';

export interface ChatStackXLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXLayered extends SvelteComponent<ChatStackXLayeredProps> {}
