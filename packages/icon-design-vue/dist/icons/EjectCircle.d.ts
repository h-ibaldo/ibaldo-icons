import type { DefineComponent } from 'vue';

export interface EjectCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectCircle: DefineComponent<EjectCircleProps>;

export default EjectCircle;
export { EjectCircle };
