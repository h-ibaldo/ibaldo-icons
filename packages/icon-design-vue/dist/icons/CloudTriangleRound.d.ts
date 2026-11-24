import type { DefineComponent } from 'vue';

export interface CloudTriangleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudTriangleRound: DefineComponent<CloudTriangleRoundProps>;

export default CloudTriangleRound;
export { CloudTriangleRound };
