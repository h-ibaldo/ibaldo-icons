import type { DefineComponent } from 'vue';

export interface SquareStackLinkBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackLinkBracket: DefineComponent<SquareStackLinkBracketProps>;

export default SquareStackLinkBracket;
export { SquareStackLinkBracket };
