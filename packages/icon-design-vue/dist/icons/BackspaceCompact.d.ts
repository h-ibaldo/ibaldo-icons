import type { DefineComponent } from 'vue';

export interface BackspaceCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BackspaceCompact: DefineComponent<BackspaceCompactProps>;

export default BackspaceCompact;
export { BackspaceCompact };
