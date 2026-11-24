import type { DefineComponent } from 'vue';

export interface TabXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabXCircle: DefineComponent<TabXCircleProps>;

export default TabXCircle;
export { TabXCircle };
