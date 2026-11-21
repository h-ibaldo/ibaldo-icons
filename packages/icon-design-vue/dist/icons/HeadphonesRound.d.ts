import type { DefineComponent } from 'vue';

export interface HeadphonesRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeadphonesRound: DefineComponent<HeadphonesRoundProps>;

export default HeadphonesRound;
export { HeadphonesRound };
