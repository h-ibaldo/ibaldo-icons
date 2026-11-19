import type { DefineComponent } from 'vue';

export interface LayoutListDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutListDashed: DefineComponent<LayoutListDashedProps>;

export default LayoutListDashed;
export { LayoutListDashed };
