import type { DefineComponent } from 'vue';

export interface BorderLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderLeft: DefineComponent<BorderLeftProps>;

export default BorderLeft;
export { BorderLeft };
