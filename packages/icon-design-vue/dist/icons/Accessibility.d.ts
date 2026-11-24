import type { DefineComponent } from 'vue';

export interface AccessibilityProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Accessibility: DefineComponent<AccessibilityProps>;

export default Accessibility;
export { Accessibility };
