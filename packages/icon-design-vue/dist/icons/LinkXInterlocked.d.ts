import type { DefineComponent } from 'vue';

export interface LinkXInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXInterlocked: DefineComponent<LinkXInterlockedProps>;

export default LinkXInterlocked;
export { LinkXInterlocked };
