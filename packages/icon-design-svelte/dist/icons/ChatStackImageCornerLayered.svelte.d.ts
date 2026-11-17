import { SvelteComponent } from 'svelte';

export interface ChatStackImageCornerLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackImageCornerLayered extends SvelteComponent<ChatStackImageCornerLayeredProps> {}
