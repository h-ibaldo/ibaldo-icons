import type { DefineComponent } from 'vue';

export interface Text3DHexagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text3DHexagon: DefineComponent<Text3DHexagonProps>;

export default Text3DHexagon;
export { Text3DHexagon };
