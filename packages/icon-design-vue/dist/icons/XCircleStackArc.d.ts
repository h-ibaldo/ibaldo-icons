import type { DefineComponent } from 'vue';

export interface XCircleStackArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XCircleStackArc: DefineComponent<XCircleStackArcProps>;

export default XCircleStackArc;
export { XCircleStackArc };
