import type { DefineComponent } from 'vue';

export interface BinocularsTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsTall: DefineComponent<BinocularsTallProps>;

export default BinocularsTall;
export { BinocularsTall };
