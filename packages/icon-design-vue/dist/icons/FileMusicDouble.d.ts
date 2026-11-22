import type { DefineComponent } from 'vue';

export interface FileMusicDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMusicDouble: DefineComponent<FileMusicDoubleProps>;

export default FileMusicDouble;
export { FileMusicDouble };
