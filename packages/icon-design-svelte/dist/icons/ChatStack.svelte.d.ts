import { SvelteComponent } from 'svelte';

export interface ChatStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStack extends SvelteComponent<ChatStackProps> {}
