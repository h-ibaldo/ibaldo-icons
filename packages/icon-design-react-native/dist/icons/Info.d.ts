import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Info: ForwardRefExoticComponent<InfoProps & RefAttributes<Svg>>;

export default Info;
export { Info };
