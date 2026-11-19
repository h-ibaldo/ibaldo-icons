import type { DefineComponent } from 'vue';

export interface PresentationBoardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PresentationBoard: DefineComponent<PresentationBoardProps>;

export default PresentationBoard;
export { PresentationBoard };
