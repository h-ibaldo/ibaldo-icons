import type { DefineComponent } from 'vue';

export interface TabMinusCenterStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabMinusCenterStep: DefineComponent<TabMinusCenterStepProps>;

export default TabMinusCenterStep;
export { TabMinusCenterStep };
