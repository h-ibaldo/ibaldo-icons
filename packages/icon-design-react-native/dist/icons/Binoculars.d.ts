import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Binoculars: ForwardRefExoticComponent<BinocularsProps & RefAttributes<Svg>>;

export default Binoculars;
export { Binoculars };
