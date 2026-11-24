import type { DefineComponent } from 'vue';

export interface LinkRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkRound: DefineComponent<LinkRoundProps>;

export default LinkRound;
export { LinkRound };
