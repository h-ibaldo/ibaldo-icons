import type { DefineComponent } from 'vue';

export interface TabPlusCenterStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusCenterStep: DefineComponent<TabPlusCenterStepProps>;

export default TabPlusCenterStep;
export { TabPlusCenterStep };
