import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBook: ForwardRefExoticComponent<AddressBookProps & RefAttributes<Svg>>;

export default AddressBook;
export { AddressBook };
