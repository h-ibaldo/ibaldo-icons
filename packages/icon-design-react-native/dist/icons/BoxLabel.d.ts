import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxLabelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxLabel: ForwardRefExoticComponent<BoxLabelProps & RefAttributes<Svg>>;

export default BoxLabel;
export { BoxLabel };
