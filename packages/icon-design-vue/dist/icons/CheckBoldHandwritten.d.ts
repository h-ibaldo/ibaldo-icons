import type { DefineComponent } from 'vue';

export interface CheckBoldHandwrittenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckBoldHandwritten: DefineComponent<CheckBoldHandwrittenProps>;

export default CheckBoldHandwritten;
export { CheckBoldHandwritten };
