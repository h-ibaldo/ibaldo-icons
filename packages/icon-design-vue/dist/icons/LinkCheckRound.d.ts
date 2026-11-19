import type { DefineComponent } from 'vue';

export interface LinkCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckRound: DefineComponent<LinkCheckRoundProps>;

export default LinkCheckRound;
export { LinkCheckRound };
