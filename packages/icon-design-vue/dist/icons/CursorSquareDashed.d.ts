import type { DefineComponent } from 'vue';

export interface CursorSquareDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorSquareDashed: DefineComponent<CursorSquareDashedProps>;

export default CursorSquareDashed;
export { CursorSquareDashed };
