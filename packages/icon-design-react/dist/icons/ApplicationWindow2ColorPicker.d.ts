import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2ColorPickerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2ColorPicker: ForwardRefExoticComponent<ApplicationWindow2ColorPickerProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2ColorPicker;
export { ApplicationWindow2ColorPicker };
