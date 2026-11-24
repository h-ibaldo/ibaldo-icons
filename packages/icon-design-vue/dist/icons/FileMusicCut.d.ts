import type { DefineComponent } from 'vue';

export interface FileMusicCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMusicCut: DefineComponent<FileMusicCutProps>;

export default FileMusicCut;
export { FileMusicCut };
