import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookHooksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookHooks: ForwardRefExoticComponent<AddressBookHooksProps & RefAttributes<Svg>>;

export default AddressBookHooks;
export { AddressBookHooks };
