import type { DefineComponent } from 'vue';

export interface LinkBrokenInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBrokenInterlocked: DefineComponent<LinkBrokenInterlockedProps>;

export default LinkBrokenInterlocked;
export { LinkBrokenInterlocked };
