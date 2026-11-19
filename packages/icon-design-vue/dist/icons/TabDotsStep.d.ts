import type { DefineComponent } from 'vue';

export interface TabDotsStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabDotsStep: DefineComponent<TabDotsStepProps>;

export default TabDotsStep;
export { TabDotsStep };
