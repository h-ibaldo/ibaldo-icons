import type { DefineComponent } from 'vue';

export interface EjectThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectThick: DefineComponent<EjectThickProps>;

export default EjectThick;
export { EjectThick };
