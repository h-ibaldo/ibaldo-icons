import type { DefineComponent } from 'vue';

export interface LinkMenuRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuRound: DefineComponent<LinkMenuRoundProps>;

export default LinkMenuRound;
export { LinkMenuRound };
