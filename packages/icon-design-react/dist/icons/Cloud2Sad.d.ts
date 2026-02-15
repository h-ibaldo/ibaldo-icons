import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2SadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Sad: ForwardRefExoticComponent<Cloud2SadProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Sad;
export { Cloud2Sad };
