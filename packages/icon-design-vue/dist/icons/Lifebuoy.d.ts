import type { DefineComponent } from 'vue';

export interface LifebuoyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Lifebuoy: DefineComponent<LifebuoyProps>;

export default Lifebuoy;
export { Lifebuoy };
