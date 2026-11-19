import type { DefineComponent } from 'vue';

export interface FileCastPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCastPlain: DefineComponent<FileCastPlainProps>;

export default FileCastPlain;
export { FileCastPlain };
