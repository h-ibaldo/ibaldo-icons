import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListArrowBendDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListArrowBendDownLeft: ForwardRefExoticComponent<ListArrowBendDownLeftProps & RefAttributes<Svg>>;

export default ListArrowBendDownLeft;
export { ListArrowBendDownLeft };
