import type { DefineComponent } from 'vue';

export interface BinocularsShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsShort: DefineComponent<BinocularsShortProps>;

export default BinocularsShort;
export { BinocularsShort };
