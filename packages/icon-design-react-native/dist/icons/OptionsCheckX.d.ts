import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckX: ForwardRefExoticComponent<OptionsCheckXProps & RefAttributes<Svg>>;

export default OptionsCheckX;
export { OptionsCheckX };
