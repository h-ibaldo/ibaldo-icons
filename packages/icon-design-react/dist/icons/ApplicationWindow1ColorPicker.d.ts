import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow1ColorPickerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow1ColorPicker: ForwardRefExoticComponent<ApplicationWindow1ColorPickerProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow1ColorPicker;
export { ApplicationWindow1ColorPicker };
