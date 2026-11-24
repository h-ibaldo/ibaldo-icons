import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCircleSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleSlanted: ForwardRefExoticComponent<LinkCheckCircleSlantedProps & RefAttributes<Svg>>;

export default LinkCheckCircleSlanted;
export { LinkCheckCircleSlanted };
