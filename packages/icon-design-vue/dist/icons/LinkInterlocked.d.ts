import type { DefineComponent } from 'vue';

export interface LinkInterlockedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkInterlocked: DefineComponent<LinkInterlockedProps>;

export default LinkInterlocked;
export { LinkInterlocked };
