import type { DefineComponent } from 'vue';

export interface HandPointerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandPointerRound: DefineComponent<HandPointerRoundProps>;

export default HandPointerRound;
export { HandPointerRound };
