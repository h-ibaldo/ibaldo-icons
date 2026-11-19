import type { DefineComponent } from 'vue';

export interface BinocularsCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsCompact: DefineComponent<BinocularsCompactProps>;

export default BinocularsCompact;
export { BinocularsCompact };
