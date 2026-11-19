import type { DefineComponent } from 'vue';

export interface MusicNoteCurlSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNoteCurlSmall: DefineComponent<MusicNoteCurlSmallProps>;

export default MusicNoteCurlSmall;
export { MusicNoteCurlSmall };
