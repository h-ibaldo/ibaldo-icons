import type { DefineComponent } from 'vue';

export interface InfoCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoCircle: DefineComponent<InfoCircleProps>;

export default InfoCircle;
export { InfoCircle };
