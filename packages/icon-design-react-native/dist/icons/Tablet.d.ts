import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabletProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Tablet: ForwardRefExoticComponent<TabletProps & RefAttributes<Svg>>;

export default Tablet;
export { Tablet };
