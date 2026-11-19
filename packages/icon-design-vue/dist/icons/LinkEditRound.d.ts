import type { DefineComponent } from 'vue';

export interface LinkEditRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditRound: DefineComponent<LinkEditRoundProps>;

export default LinkEditRound;
export { LinkEditRound };
