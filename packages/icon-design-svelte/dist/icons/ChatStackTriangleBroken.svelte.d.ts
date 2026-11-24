import { SvelteComponent } from 'svelte';

export interface ChatStackTriangleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTriangleBroken extends SvelteComponent<ChatStackTriangleBrokenProps> {}
