import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraSyncOrbitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraSyncOrbit: ForwardRefExoticComponent<CameraSyncOrbitProps & RefAttributes<SVGSVGElement>>;

export default CameraSyncOrbit;
export { CameraSyncOrbit };
