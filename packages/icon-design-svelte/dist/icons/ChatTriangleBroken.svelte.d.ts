import { SvelteComponent } from 'svelte';

export interface ChatTriangleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTriangleBroken extends SvelteComponent<ChatTriangleBrokenProps> {}
