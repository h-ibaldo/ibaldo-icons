import type { DefineComponent } from 'vue';

export interface MusicNoteCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNoteCurl: DefineComponent<MusicNoteCurlProps>;

export default MusicNoteCurl;
export { MusicNoteCurl };
