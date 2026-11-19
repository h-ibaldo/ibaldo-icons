import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCircleNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleNotched: ForwardRefExoticComponent<LinkCheckCircleNotchedProps & RefAttributes<Svg>>;

export default LinkCheckCircleNotched;
export { LinkCheckCircleNotched };
