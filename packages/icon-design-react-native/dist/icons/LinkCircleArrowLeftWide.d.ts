import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowLeftWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowLeftWide: ForwardRefExoticComponent<LinkCircleArrowLeftWideProps & RefAttributes<Svg>>;

export default LinkCircleArrowLeftWide;
export { LinkCircleArrowLeftWide };
