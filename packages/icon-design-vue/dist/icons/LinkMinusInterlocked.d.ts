import type { DefineComponent } from 'vue';

export interface LinkMinusInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusInterlocked: DefineComponent<LinkMinusInterlockedProps>;

export default LinkMinusInterlocked;
export { LinkMinusInterlocked };
