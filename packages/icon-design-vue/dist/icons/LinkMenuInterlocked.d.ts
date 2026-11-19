import type { DefineComponent } from 'vue';

export interface LinkMenuInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuInterlocked: DefineComponent<LinkMenuInterlockedProps>;

export default LinkMenuInterlocked;
export { LinkMenuInterlocked };
