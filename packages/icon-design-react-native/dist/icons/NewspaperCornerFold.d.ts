import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperCornerFoldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperCornerFold: ForwardRefExoticComponent<NewspaperCornerFoldProps & RefAttributes<Svg>>;

export default NewspaperCornerFold;
export { NewspaperCornerFold };
