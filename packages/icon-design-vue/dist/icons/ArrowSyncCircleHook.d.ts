import type { DefineComponent } from 'vue';

export interface ArrowSyncCircleHookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCircleHook: DefineComponent<ArrowSyncCircleHookProps>;

export default ArrowSyncCircleHook;
export { ArrowSyncCircleHook };
