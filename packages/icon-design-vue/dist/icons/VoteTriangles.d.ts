import type { DefineComponent } from 'vue';

export interface VoteTrianglesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteTriangles: DefineComponent<VoteTrianglesProps>;

export default VoteTriangles;
export { VoteTriangles };
