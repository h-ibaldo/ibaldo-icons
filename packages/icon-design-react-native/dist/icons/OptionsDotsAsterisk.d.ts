import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsDotsAsteriskProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsDotsAsterisk: ForwardRefExoticComponent<OptionsDotsAsteriskProps & RefAttributes<Svg>>;

export default OptionsDotsAsterisk;
export { OptionsDotsAsterisk };
