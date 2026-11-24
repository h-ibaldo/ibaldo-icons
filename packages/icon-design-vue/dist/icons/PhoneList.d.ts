import type { DefineComponent } from 'vue';

export interface PhoneListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneList: DefineComponent<PhoneListProps>;

export default PhoneList;
export { PhoneList };
