import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircleBoxy extends SvelteComponent<ChatStackDotsCircleBoxyProps> {}
