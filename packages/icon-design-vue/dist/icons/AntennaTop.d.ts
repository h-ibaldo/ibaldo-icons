import type { DefineComponent } from 'vue';

export interface AntennaTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AntennaTop: DefineComponent<AntennaTopProps>;

export default AntennaTop;
export { AntennaTop };
