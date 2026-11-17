import { SvelteComponent } from 'svelte';

export interface ChatStackHeartCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartCornerBroken extends SvelteComponent<ChatStackHeartCornerBrokenProps> {}
