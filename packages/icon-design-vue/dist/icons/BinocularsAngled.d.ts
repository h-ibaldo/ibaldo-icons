import type { DefineComponent } from 'vue';

export interface BinocularsAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsAngled: DefineComponent<BinocularsAngledProps>;

export default BinocularsAngled;
export { BinocularsAngled };
