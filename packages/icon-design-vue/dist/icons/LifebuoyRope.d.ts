import type { DefineComponent } from 'vue';

export interface LifebuoyRopeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LifebuoyRope: DefineComponent<LifebuoyRopeProps>;

export default LifebuoyRope;
export { LifebuoyRope };
