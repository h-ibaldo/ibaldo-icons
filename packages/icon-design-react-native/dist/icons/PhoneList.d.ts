import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneListProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneList: ForwardRefExoticComponent<PhoneListProps & RefAttributes<Svg>>;

export default PhoneList;
export { PhoneList };
