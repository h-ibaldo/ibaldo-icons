import type { DefineComponent } from 'vue';

export interface PresentationProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Presentation: DefineComponent<PresentationProps>;

export default Presentation;
export { Presentation };
