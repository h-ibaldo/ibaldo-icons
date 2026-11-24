import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MegaphoneHandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MegaphoneHandle: ForwardRefExoticComponent<MegaphoneHandleProps & RefAttributes<SVGSVGElement>>;

export default MegaphoneHandle;
export { MegaphoneHandle };
