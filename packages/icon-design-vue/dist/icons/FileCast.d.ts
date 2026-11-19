import type { DefineComponent } from 'vue';

export interface FileCastProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCast: DefineComponent<FileCastProps>;

export default FileCast;
export { FileCast };
