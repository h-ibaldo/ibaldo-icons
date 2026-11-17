import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMinus: ForwardRefExoticComponent<CloudMinusProps & RefAttributes<SVGSVGElement>>;

export default CloudMinus;
export { CloudMinus };
