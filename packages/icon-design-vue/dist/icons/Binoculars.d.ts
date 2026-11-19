import type { DefineComponent } from 'vue';

export interface BinocularsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Binoculars: DefineComponent<BinocularsProps>;

export default Binoculars;
export { Binoculars };
