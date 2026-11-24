import type { DefineComponent } from 'vue';

export interface PaintbrushProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Paintbrush: DefineComponent<PaintbrushProps>;

export default Paintbrush;
export { Paintbrush };
