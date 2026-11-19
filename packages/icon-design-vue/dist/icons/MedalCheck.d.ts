import type { DefineComponent } from 'vue';

export interface MedalCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalCheck: DefineComponent<MedalCheckProps>;

export default MedalCheck;
export { MedalCheck };
