import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCornerBroken extends SvelteComponent<ChatStackSearchCornerBrokenProps> {}
