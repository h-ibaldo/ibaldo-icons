import type { DefineComponent } from 'vue';

export interface GiftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Gift: DefineComponent<GiftProps>;

export default Gift;
export { Gift };
