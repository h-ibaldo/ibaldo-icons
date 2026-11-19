import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeLiddedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeLidded: ForwardRefExoticComponent<EyeLiddedProps & RefAttributes<Svg>>;

export default EyeLidded;
export { EyeLidded };
