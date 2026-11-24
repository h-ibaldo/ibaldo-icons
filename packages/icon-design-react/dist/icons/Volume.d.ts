import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Volume: ForwardRefExoticComponent<VolumeProps & RefAttributes<SVGSVGElement>>;

export default Volume;
export { Volume };
