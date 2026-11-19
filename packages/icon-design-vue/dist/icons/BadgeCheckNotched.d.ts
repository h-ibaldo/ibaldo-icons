import type { DefineComponent } from 'vue';

export interface BadgeCheckNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckNotched: DefineComponent<BadgeCheckNotchedProps>;

export default BadgeCheckNotched;
export { BadgeCheckNotched };
