import type { DefineComponent } from 'vue';

export interface LinkOffCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkOffCircle: DefineComponent<LinkOffCircleProps>;

export default LinkOffCircle;
export { LinkOffCircle };
