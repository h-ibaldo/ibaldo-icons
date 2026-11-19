import type { DefineComponent } from 'vue';

export interface DockVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockVertical: DefineComponent<DockVerticalProps>;

export default DockVertical;
export { DockVertical };
