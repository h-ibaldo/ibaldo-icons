import type { DefineComponent } from 'vue';

export interface InfoPillarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoPillar: DefineComponent<InfoPillarProps>;

export default InfoPillar;
export { InfoPillar };
