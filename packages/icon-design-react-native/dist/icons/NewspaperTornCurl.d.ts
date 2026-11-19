import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperTornCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperTornCurl: ForwardRefExoticComponent<NewspaperTornCurlProps & RefAttributes<Svg>>;

export default NewspaperTornCurl;
export { NewspaperTornCurl };
