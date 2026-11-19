import type { DefineComponent } from 'vue';

export interface NodesCircleFourProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesCircleFour: DefineComponent<NodesCircleFourProps>;

export default NodesCircleFour;
export { NodesCircleFour };
