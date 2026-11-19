import type { DefineComponent } from 'vue';

export interface XUndoWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XUndoWide: DefineComponent<XUndoWideProps>;

export default XUndoWide;
export { XUndoWide };
