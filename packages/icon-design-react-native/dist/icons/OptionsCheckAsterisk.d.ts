import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckAsteriskProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckAsterisk: ForwardRefExoticComponent<OptionsCheckAsteriskProps & RefAttributes<Svg>>;

export default OptionsCheckAsterisk;
export { OptionsCheckAsterisk };
