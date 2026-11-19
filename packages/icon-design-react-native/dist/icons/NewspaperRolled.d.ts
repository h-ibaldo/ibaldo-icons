import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperRolledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperRolled: ForwardRefExoticComponent<NewspaperRolledProps & RefAttributes<Svg>>;

export default NewspaperRolled;
export { NewspaperRolled };
