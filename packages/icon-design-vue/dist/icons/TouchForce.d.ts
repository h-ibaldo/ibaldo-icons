import type { DefineComponent } from 'vue';

export interface TouchForceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchForce: DefineComponent<TouchForceProps>;

export default TouchForce;
export { TouchForce };
