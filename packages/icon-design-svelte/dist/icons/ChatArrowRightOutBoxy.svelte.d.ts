import { SvelteComponent } from 'svelte';

export interface ChatArrowRightOutBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatArrowRightOutBoxy extends SvelteComponent<ChatArrowRightOutBoxyProps> {}
