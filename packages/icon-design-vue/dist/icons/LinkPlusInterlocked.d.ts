import type { DefineComponent } from 'vue';

export interface LinkPlusInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusInterlocked: DefineComponent<LinkPlusInterlockedProps>;

export default LinkPlusInterlocked;
export { LinkPlusInterlocked };
