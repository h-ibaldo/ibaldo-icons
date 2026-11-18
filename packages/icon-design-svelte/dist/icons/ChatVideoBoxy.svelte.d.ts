import { SvelteComponent } from 'svelte';

export interface ChatVideoBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoBoxy extends SvelteComponent<ChatVideoBoxyProps> {}
