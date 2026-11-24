import type { DefineComponent } from 'vue';

export interface BoxPerspectiveShadedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxPerspectiveShaded: DefineComponent<BoxPerspectiveShadedProps>;

export default BoxPerspectiveShaded;
export { BoxPerspectiveShaded };
