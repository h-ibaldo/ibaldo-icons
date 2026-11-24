import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeadphonesPaddedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeadphonesPadded: ForwardRefExoticComponent<HeadphonesPaddedProps & RefAttributes<Svg>>;

export default HeadphonesPadded;
export { HeadphonesPadded };
