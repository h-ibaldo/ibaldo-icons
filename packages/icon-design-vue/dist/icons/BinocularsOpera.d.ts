import type { DefineComponent } from 'vue';

export interface BinocularsOperaProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsOpera: DefineComponent<BinocularsOperaProps>;

export default BinocularsOpera;
export { BinocularsOpera };
