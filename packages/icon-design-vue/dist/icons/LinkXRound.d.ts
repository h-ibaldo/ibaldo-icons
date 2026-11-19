import type { DefineComponent } from 'vue';

export interface LinkXRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXRound: DefineComponent<LinkXRoundProps>;

export default LinkXRound;
export { LinkXRound };
