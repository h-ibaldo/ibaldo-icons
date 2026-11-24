import type { DefineComponent } from 'vue';

export interface LinkMinusSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusSlanted: DefineComponent<LinkMinusSlantedProps>;

export default LinkMinusSlanted;
export { LinkMinusSlanted };
