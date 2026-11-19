import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookAtBoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookAtBound: ForwardRefExoticComponent<AddressBookAtBoundProps & RefAttributes<Svg>>;

export default AddressBookAtBound;
export { AddressBookAtBound };
