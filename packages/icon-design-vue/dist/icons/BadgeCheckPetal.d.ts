import type { DefineComponent } from 'vue';

export interface BadgeCheckPetalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckPetal: DefineComponent<BadgeCheckPetalProps>;

export default BadgeCheckPetal;
export { BadgeCheckPetal };
