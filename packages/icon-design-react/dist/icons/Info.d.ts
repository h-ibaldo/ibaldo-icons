import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Info: ForwardRefExoticComponent<InfoProps & RefAttributes<SVGSVGElement>>;

export default Info;
export { Info };
