import type { DefineComponent } from 'vue';

export interface AtSpiralProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtSpiral: DefineComponent<AtSpiralProps>;

export default AtSpiral;
export { AtSpiral };
