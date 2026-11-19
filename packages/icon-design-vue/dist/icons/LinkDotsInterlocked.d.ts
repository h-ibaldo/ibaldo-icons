import type { DefineComponent } from 'vue';

export interface LinkDotsInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsInterlocked: DefineComponent<LinkDotsInterlockedProps>;

export default LinkDotsInterlocked;
export { LinkDotsInterlocked };
