import type { DefineComponent } from 'vue';

export interface InfoCirclePointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoCirclePointer: DefineComponent<InfoCirclePointerProps>;

export default InfoCirclePointer;
export { InfoCirclePointer };
