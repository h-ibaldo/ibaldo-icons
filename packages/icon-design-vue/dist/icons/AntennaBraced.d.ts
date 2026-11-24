import type { DefineComponent } from 'vue';

export interface AntennaBracedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AntennaBraced: DefineComponent<AntennaBracedProps>;

export default AntennaBraced;
export { AntennaBraced };
