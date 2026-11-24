import type { DefineComponent } from 'vue';

export interface BinocularsEyecupsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsEyecups: DefineComponent<BinocularsEyecupsProps>;

export default BinocularsEyecups;
export { BinocularsEyecups };
