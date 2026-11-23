import type { DefineComponent } from 'vue';

export interface BroomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Broom: DefineComponent<BroomProps>;

export default Broom;
export { Broom };
