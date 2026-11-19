import type { DefineComponent } from 'vue';

export interface ArrowSyncHexagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncHexagon: DefineComponent<ArrowSyncHexagonProps>;

export default ArrowSyncHexagon;
export { ArrowSyncHexagon };
