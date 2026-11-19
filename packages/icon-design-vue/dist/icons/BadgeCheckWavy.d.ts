import type { DefineComponent } from 'vue';

export interface BadgeCheckWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckWavy: DefineComponent<BadgeCheckWavyProps>;

export default BadgeCheckWavy;
export { BadgeCheckWavy };
