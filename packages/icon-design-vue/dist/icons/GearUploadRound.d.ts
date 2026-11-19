import type { DefineComponent } from 'vue';

export interface GearUploadRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearUploadRound: DefineComponent<GearUploadRoundProps>;

export default GearUploadRound;
export { GearUploadRound };
