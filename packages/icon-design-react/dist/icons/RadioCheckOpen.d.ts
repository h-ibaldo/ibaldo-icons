import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RadioCheckOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RadioCheckOpen: ForwardRefExoticComponent<RadioCheckOpenProps & RefAttributes<SVGSVGElement>>;

export default RadioCheckOpen;
export { RadioCheckOpen };
