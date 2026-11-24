import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleBoxy extends SvelteComponent<ChatDotsCircleBoxyProps> {}
