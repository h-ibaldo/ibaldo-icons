import type { DefineComponent } from 'vue';

export interface VipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Vip: DefineComponent<VipProps>;

export default Vip;
export { Vip };
