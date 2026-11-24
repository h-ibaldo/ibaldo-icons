import type { DefineComponent } from 'vue';

export interface MedalFoldedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalFolded: DefineComponent<MedalFoldedProps>;

export default MedalFolded;
export { MedalFolded };
