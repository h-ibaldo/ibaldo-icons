import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookAtProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookAt: ForwardRefExoticComponent<AddressBookAtProps & RefAttributes<Svg>>;

export default AddressBookAt;
export { AddressBookAt };
