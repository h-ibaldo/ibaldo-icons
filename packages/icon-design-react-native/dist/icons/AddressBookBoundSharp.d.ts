import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookBoundSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookBoundSharp: ForwardRefExoticComponent<AddressBookBoundSharpProps & RefAttributes<Svg>>;

export default AddressBookBoundSharp;
export { AddressBookBoundSharp };
