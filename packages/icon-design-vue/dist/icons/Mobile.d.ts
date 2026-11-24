import type { DefineComponent } from 'vue';

export interface MobileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Mobile: DefineComponent<MobileProps>;

export default Mobile;
export { Mobile };
