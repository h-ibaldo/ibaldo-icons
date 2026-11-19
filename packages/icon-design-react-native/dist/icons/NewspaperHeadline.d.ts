import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperHeadlineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperHeadline: ForwardRefExoticComponent<NewspaperHeadlineProps & RefAttributes<Svg>>;

export default NewspaperHeadline;
export { NewspaperHeadline };
