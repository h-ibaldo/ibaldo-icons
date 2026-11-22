import type { DefineComponent } from 'vue';

export interface RouterLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RouterLock: DefineComponent<RouterLockProps>;

export default RouterLock;
export { RouterLock };
