import type { DefineComponent } from 'vue';

export interface BackspaceCompactSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BackspaceCompactSmall: DefineComponent<BackspaceCompactSmallProps>;

export default BackspaceCompactSmall;
export { BackspaceCompactSmall };
