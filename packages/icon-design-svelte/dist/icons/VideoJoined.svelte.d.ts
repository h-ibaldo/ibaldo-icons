import { SvelteComponent } from 'svelte';

export interface VideoJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoJoined extends SvelteComponent<VideoJoinedProps> {}
