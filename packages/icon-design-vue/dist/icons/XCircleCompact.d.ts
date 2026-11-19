import type { DefineComponent } from 'vue';

export interface XCircleCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XCircleCompact: DefineComponent<XCircleCompactProps>;

export default XCircleCompact;
export { XCircleCompact };
