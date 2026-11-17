import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtOneTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtOneTall: ForwardRefExoticComponent<AtOneTallProps & RefAttributes<SVGSVGElement>>;

export default AtOneTall;
export { AtOneTall };
