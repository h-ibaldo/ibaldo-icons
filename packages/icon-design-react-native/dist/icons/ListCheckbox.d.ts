import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCheckboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCheckbox: ForwardRefExoticComponent<ListCheckboxProps & RefAttributes<Svg>>;

export default ListCheckbox;
export { ListCheckbox };
