import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleFlipped extends SvelteComponent<ChatStackXDoubleFlippedProps> {}
