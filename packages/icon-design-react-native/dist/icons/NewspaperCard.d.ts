import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperCardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperCard: ForwardRefExoticComponent<NewspaperCardProps & RefAttributes<Svg>>;

export default NewspaperCard;
export { NewspaperCard };
