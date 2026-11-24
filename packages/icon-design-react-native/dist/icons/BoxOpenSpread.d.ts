import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxOpenSpreadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxOpenSpread: ForwardRefExoticComponent<BoxOpenSpreadProps & RefAttributes<Svg>>;

export default BoxOpenSpread;
export { BoxOpenSpread };
