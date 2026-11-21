import type { DefineComponent } from 'vue';

export interface RouterAntennaProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RouterAntenna: DefineComponent<RouterAntennaProps>;

export default RouterAntenna;
export { RouterAntenna };
