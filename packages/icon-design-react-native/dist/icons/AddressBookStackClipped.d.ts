import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookStackClippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookStackClipped: ForwardRefExoticComponent<AddressBookStackClippedProps & RefAttributes<Svg>>;

export default AddressBookStackClipped;
export { AddressBookStackClipped };
