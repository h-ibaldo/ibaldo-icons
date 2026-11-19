import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCheckCircle: ForwardRefExoticComponent<ListCheckCircleProps & RefAttributes<Svg>>;

export default ListCheckCircle;
export { ListCheckCircle };
