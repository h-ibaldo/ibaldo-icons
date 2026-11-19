import type { DefineComponent } from 'vue';

export interface LinkCheckInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckInterlocked: DefineComponent<LinkCheckInterlockedProps>;

export default LinkCheckInterlocked;
export { LinkCheckInterlocked };
