import type { DefineComponent } from 'vue';

export interface LinkPlusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusRound: DefineComponent<LinkPlusRoundProps>;

export default LinkPlusRound;
export { LinkPlusRound };
