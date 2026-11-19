import type { DefineComponent } from 'vue';

export interface ShareNodesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShareNodes: DefineComponent<ShareNodesProps>;

export default ShareNodes;
export { ShareNodes };
