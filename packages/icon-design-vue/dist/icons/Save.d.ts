import type { DefineComponent } from 'vue';

export interface SaveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Save: DefineComponent<SaveProps>;

export default Save;
export { Save };
