import type { DefineComponent } from 'vue';

export interface PointerAlertCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerAlertCircle: DefineComponent<PointerAlertCircleProps>;

export default PointerAlertCircle;
export { PointerAlertCircle };
