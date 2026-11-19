import type { DefineComponent } from 'vue';

export interface BinocularsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsBoxy: DefineComponent<BinocularsBoxyProps>;

export default BinocularsBoxy;
export { BinocularsBoxy };
