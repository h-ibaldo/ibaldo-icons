import { SvelteComponent } from 'svelte';

export interface ChatStackHashSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHashSlant extends SvelteComponent<ChatStackHashSlantProps> {}
