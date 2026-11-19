import type { DefineComponent } from 'vue';

export interface Text3DHexagonSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text3DHexagonSmall: DefineComponent<Text3DHexagonSmallProps>;

export default Text3DHexagonSmall;
export { Text3DHexagonSmall };
