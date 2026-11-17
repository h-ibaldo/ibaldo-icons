import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Close: ForwardRefExoticComponent<Cloud2CloseProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Close;
export { Cloud2Close };
