import type { DefineComponent } from 'vue';

export interface BoxOpenRaisedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxOpenRaised: DefineComponent<BoxOpenRaisedProps>;

export default BoxOpenRaised;
export { BoxOpenRaised };
