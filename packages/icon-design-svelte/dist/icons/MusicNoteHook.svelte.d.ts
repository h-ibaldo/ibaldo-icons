import { SvelteComponent } from 'svelte';

export interface MusicNoteHookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicNoteHook extends SvelteComponent<MusicNoteHookProps> {}
