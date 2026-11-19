import type { DefineComponent } from 'vue';

export interface TabCheckStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheckStep: DefineComponent<TabCheckStepProps>;

export default TabCheckStep;
export { TabCheckStep };
