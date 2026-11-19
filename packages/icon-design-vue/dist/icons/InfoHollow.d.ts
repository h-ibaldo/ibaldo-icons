import type { DefineComponent } from 'vue';

export interface InfoHollowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoHollow: DefineComponent<InfoHollowProps>;

export default InfoHollow;
export { InfoHollow };
