import { SvelteComponent } from 'svelte';

export interface LinkClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkClip extends SvelteComponent<LinkClipProps> {}
