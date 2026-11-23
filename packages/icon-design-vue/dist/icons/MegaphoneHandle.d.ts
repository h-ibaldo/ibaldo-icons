import type { DefineComponent } from 'vue';

export interface MegaphoneHandleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MegaphoneHandle: DefineComponent<MegaphoneHandleProps>;

export default MegaphoneHandle;
export { MegaphoneHandle };
