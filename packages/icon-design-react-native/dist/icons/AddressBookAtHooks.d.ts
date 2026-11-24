import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookAtHooksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookAtHooks: ForwardRefExoticComponent<AddressBookAtHooksProps & RefAttributes<Svg>>;

export default AddressBookAtHooks;
export { AddressBookAtHooks };
