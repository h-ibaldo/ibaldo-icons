import type { DefineComponent } from 'vue';

export interface TabDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabDashed: DefineComponent<TabDashedProps>;

export default TabDashed;
export { TabDashed };
