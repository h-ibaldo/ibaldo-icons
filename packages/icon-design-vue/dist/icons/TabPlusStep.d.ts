import type { DefineComponent } from 'vue';

export interface TabPlusStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusStep: DefineComponent<TabPlusStepProps>;

export default TabPlusStep;
export { TabPlusStep };
