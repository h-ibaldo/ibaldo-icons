import type { DefineComponent } from 'vue';

export interface BadgeCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckCircle: DefineComponent<BadgeCheckCircleProps>;

export default BadgeCheckCircle;
export { BadgeCheckCircle };
