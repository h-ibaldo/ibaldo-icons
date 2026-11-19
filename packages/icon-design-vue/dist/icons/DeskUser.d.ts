import type { DefineComponent } from 'vue';

export interface DeskUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DeskUser: DefineComponent<DeskUserProps>;

export default DeskUser;
export { DeskUser };
