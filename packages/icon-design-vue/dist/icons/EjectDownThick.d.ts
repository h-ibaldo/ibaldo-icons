import type { DefineComponent } from 'vue';

export interface EjectDownThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectDownThick: DefineComponent<EjectDownThickProps>;

export default EjectDownThick;
export { EjectDownThick };
