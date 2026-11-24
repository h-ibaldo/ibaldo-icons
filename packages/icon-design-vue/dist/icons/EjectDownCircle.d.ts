import type { DefineComponent } from 'vue';

export interface EjectDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectDownCircle: DefineComponent<EjectDownCircleProps>;

export default EjectDownCircle;
export { EjectDownCircle };
