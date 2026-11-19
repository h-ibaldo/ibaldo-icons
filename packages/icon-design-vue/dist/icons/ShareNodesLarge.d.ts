import type { DefineComponent } from 'vue';

export interface ShareNodesLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShareNodesLarge: DefineComponent<ShareNodesLargeProps>;

export default ShareNodesLarge;
export { ShareNodesLarge };
