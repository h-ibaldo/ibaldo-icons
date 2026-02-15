import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Plus: ForwardRefExoticComponent<Cloud2PlusProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Plus;
export { Cloud2Plus };
