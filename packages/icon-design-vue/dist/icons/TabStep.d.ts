import type { DefineComponent } from 'vue';

export interface TabStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabStep: DefineComponent<TabStepProps>;

export default TabStep;
export { TabStep };
