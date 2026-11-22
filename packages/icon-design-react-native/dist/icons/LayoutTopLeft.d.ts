import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutTopLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutTopLeft: ForwardRefExoticComponent<LayoutTopLeftProps & RefAttributes<Svg>>;

export default LayoutTopLeft;
export { LayoutTopLeft };
