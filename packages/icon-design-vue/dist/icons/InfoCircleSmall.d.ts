import type { DefineComponent } from 'vue';

export interface InfoCircleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoCircleSmall: DefineComponent<InfoCircleSmallProps>;

export default InfoCircleSmall;
export { InfoCircleSmall };
