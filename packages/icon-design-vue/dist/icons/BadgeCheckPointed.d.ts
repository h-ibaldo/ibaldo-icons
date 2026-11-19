import type { DefineComponent } from 'vue';

export interface BadgeCheckPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckPointed: DefineComponent<BadgeCheckPointedProps>;

export default BadgeCheckPointed;
export { BadgeCheckPointed };
