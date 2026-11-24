import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperTornCurlHeadlineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperTornCurlHeadline: ForwardRefExoticComponent<NewspaperTornCurlHeadlineProps & RefAttributes<Svg>>;

export default NewspaperTornCurlHeadline;
export { NewspaperTornCurlHeadline };
