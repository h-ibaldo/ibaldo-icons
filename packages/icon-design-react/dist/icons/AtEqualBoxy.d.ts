import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtEqualBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtEqualBoxy: ForwardRefExoticComponent<AtEqualBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtEqualBoxy;
export { AtEqualBoxy };
