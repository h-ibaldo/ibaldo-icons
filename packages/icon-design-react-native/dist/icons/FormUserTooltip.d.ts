import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormUserTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormUserTooltip: ForwardRefExoticComponent<FormUserTooltipProps & RefAttributes<Svg>>;

export default FormUserTooltip;
export { FormUserTooltip };
