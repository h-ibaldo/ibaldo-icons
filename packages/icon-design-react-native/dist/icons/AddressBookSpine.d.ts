import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookSpineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookSpine: ForwardRefExoticComponent<AddressBookSpineProps & RefAttributes<Svg>>;

export default AddressBookSpine;
export { AddressBookSpine };
