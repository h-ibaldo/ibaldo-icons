import type { DefineComponent } from 'vue';

export interface ArrowSyncNodesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncNodes: DefineComponent<ArrowSyncNodesProps>;

export default ArrowSyncNodes;
export { ArrowSyncNodes };
