import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckEqualsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckEquals: ForwardRefExoticComponent<OptionsCheckEqualsProps & RefAttributes<Svg>>;

export default OptionsCheckEquals;
export { OptionsCheckEquals };
