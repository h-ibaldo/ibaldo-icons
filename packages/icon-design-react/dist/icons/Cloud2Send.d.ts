import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2SendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Send: ForwardRefExoticComponent<Cloud2SendProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Send;
export { Cloud2Send };
