import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneList: ForwardRefExoticComponent<PhoneListProps & RefAttributes<SVGSVGElement>>;

export default PhoneList;
export { PhoneList };
