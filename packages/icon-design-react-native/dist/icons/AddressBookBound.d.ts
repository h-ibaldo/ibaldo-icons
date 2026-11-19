import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookBoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookBound: ForwardRefExoticComponent<AddressBookBoundProps & RefAttributes<Svg>>;

export default AddressBookBound;
export { AddressBookBound };
