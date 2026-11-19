import type { DefineComponent } from 'vue';

export interface TabPlusCircleStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusCircleStep: DefineComponent<TabPlusCircleStepProps>;

export default TabPlusCircleStep;
export { TabPlusCircleStep };
