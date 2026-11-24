import type { DefineComponent } from 'vue';

export interface ArrowSyncSquareHookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncSquareHook: DefineComponent<ArrowSyncSquareHookProps>;

export default ArrowSyncSquareHook;
export { ArrowSyncSquareHook };
