import type { DefineComponent } from 'vue';

export interface LifebuoyRopeLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LifebuoyRopeLong: DefineComponent<LifebuoyRopeLongProps>;

export default LifebuoyRopeLong;
export { LifebuoyRopeLong };
