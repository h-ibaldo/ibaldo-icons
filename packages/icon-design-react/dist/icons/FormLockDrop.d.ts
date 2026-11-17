import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormLockDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormLockDrop: ForwardRefExoticComponent<FormLockDropProps & RefAttributes<SVGSVGElement>>;

export default FormLockDrop;
export { FormLockDrop };
