import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstSlanted: ForwardRefExoticComponent<LinkBrokenBurstSlantedProps & RefAttributes<Svg>>;

export default LinkBrokenBurstSlanted;
export { LinkBrokenBurstSlanted };
