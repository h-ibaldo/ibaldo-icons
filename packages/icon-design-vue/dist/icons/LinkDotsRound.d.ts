import type { DefineComponent } from 'vue';

export interface LinkDotsRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsRound: DefineComponent<LinkDotsRoundProps>;

export default LinkDotsRound;
export { LinkDotsRound };
