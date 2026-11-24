import type { DefineComponent } from 'vue';

export interface MusicNoteHookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNoteHook: DefineComponent<MusicNoteHookProps>;

export default MusicNoteHook;
export { MusicNoteHook };
