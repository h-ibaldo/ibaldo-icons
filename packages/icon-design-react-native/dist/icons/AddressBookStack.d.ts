import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookStack: ForwardRefExoticComponent<AddressBookStackProps & RefAttributes<Svg>>;

export default AddressBookStack;
export { AddressBookStack };
