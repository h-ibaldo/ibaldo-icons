import type { DefineComponent } from 'vue';

export interface BriefcaseFlapLatchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapLatch: DefineComponent<BriefcaseFlapLatchProps>;

export default BriefcaseFlapLatch;
export { BriefcaseFlapLatch };
