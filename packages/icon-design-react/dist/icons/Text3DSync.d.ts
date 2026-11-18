import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text3DSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text3DSync: ForwardRefExoticComponent<Text3DSyncProps & RefAttributes<SVGSVGElement>>;

export default Text3DSync;
export { Text3DSync };
