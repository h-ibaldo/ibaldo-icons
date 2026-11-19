import type { DefineComponent } from 'vue';

export interface NodesCircleThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesCircleThree: DefineComponent<NodesCircleThreeProps>;

export default NodesCircleThree;
export { NodesCircleThree };
