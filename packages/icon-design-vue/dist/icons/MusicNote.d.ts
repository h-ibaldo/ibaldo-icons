import type { DefineComponent } from 'vue';

export interface MusicNoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNote: DefineComponent<MusicNoteProps>;

export default MusicNote;
export { MusicNote };
